
"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import api from "../../../lib/api";
import "../../styles/register.css";

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = (searchParams.get("email") || "").trim().toLowerCase();

  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const inputRefs = useRef([]);

  // Count down the verification code's 60-second validity period.
  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setTimeout(() => {
      setSecondsLeft((current) => Math.max(0, current - 1));
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft]);

  // Count down the backend-enforced resend cooldown when one is returned.
  useEffect(() => {
    if (cooldownSeconds <= 0) return;

    const timer = setTimeout(() => {
      setCooldownSeconds((current) => Math.max(0, current - 1));
    }, 1000);

    return () => clearTimeout(timer);
  }, [cooldownSeconds]);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  function handleDigitChange(index, value) {
    const digit = value.replace(/\D/g, "").slice(-1);

    setDigits((current) => {
      const updated = [...current];
      updated[index] = digit;
      return updated;
    });

    setErrorMessage("");
    setSuccessMessage("");

    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handlePaste(event) {
    event.preventDefault();

    const pastedDigits = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    if (!pastedDigits.length) return;

    const updated = ["", "", "", "", "", ""];

    pastedDigits.forEach((digit, index) => {
      updated[index] = digit;
    });

    setDigits(updated);
    setErrorMessage("");
    inputRefs.current[Math.min(pastedDigits.length, 5)]?.focus();
  }

  function handleKeyDown(index, event) {
    if (
      event.key === "Backspace" &&
      !digits[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  const verificationMutation = useMutation({
    mutationFn: async () => {
      const response = await api.post("/verify-email", {
        email,
        code: digits.join(""),
      });

      return response.data;
    },

    onSuccess: () => {
      router.replace("/connect-channels");
    },

    onError: (error) => {
      setErrorMessage(
        error.response?.data?.message ||
          "Verification failed. Please check your code and try again."
      );
    },
  });

  const resendMutation = useMutation({
    mutationFn: async () => {
      const response = await api.post("/resend-code", { email });
      return response.data;
    },

    onSuccess: (data) => {
      setDigits(["", "", "", "", "", ""]);
      setSecondsLeft(60);
      setErrorMessage("");
      setSuccessMessage("A new verification code has been sent.");

      const cooldownEndsAt = data?.data?.cooldownEndsAt;

      if (cooldownEndsAt) {
        const remaining = Math.max(
          0,
          Math.ceil((new Date(cooldownEndsAt).getTime() - Date.now()) / 1000)
        );

        setCooldownSeconds(remaining);
      }

      inputRefs.current[0]?.focus();
    },

    onError: (error) => {
      const responseData = error.response?.data;

      setErrorMessage(
        responseData?.message ||
          "Could not resend your verification code. Please try again."
      );

      const cooldownEndsAt = responseData?.data?.cooldownEndsAt;

      if (cooldownEndsAt) {
        const remaining = Math.max(
          0,
          Math.ceil((new Date(cooldownEndsAt).getTime() - Date.now()) / 1000)
        );

        setCooldownSeconds(remaining);
      }
    },
  });

  function handleSubmit(event) {
    event.preventDefault();

    if (!email) {
      setErrorMessage("Email address is missing. Please register again.");
      return;
    }

    const code = digits.join("");

    if (code.length !== 6) {
      setErrorMessage("Please enter all six digits of your verification code.");
      return;
    }

    setErrorMessage("");
    verificationMutation.mutate();
  }

  const isVerifying = verificationMutation.isPending;
  const isResending = resendMutation.isPending;

  const canResend =
    secondsLeft === 0 &&
    cooldownSeconds === 0 &&
    !isVerifying &&
    !isResending;

  return (
    <main className="register-page">
      <section className="register-form-panel">
        <div className="register-form-container">
          <Link href="/login" className="register-brand">
            <span className="register-brand-mark">C</span>
            <span className="register-brand-name">CRM Workspace</span>
          </Link>

          <header className="register-header">
            <p className="register-eyebrow">EMAIL VERIFICATION</p>
            <h1>Verify your email.</h1>
            <p className="register-description">
              We ve sent a six-digit verification code to:
              <strong className="verify-email-address">
                {email || "Your email address"}
              </strong>
              Enter the code below to activate your account.
            </p>
          </header>

          <form className="verify-form" onSubmit={handleSubmit}>
            <div className="verify-code-label">VERIFICATION CODE</div>

            <div className="verify-code-inputs">
              {digits.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  className="verify-code-input"
                  type="text"
                  inputMode="numeric"
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                  maxLength={1}
                  value={digit}
                  aria-label={`Verification digit ${index + 1}`}
                  disabled={isVerifying}
                  onChange={(event) =>
                    handleDigitChange(index, event.target.value)
                  }
                  onKeyDown={(event) => handleKeyDown(index, event)}
                  onPaste={index === 0 ? handlePaste : undefined}
                />
              ))}
            </div>

            <div className="verify-timer">
              {secondsLeft > 0 ? (
                <>
                  Code expires in{" "}
                  <strong>{formatTime(secondsLeft)}</strong>
                </>
              ) : (
                <span>Your verification code has expired.</span>
              )}
            </div>

            {errorMessage && (
              <p className="verify-message verify-error" role="alert">
                {errorMessage}
              </p>
            )}

            {successMessage && (
              <p className="verify-message verify-success" role="status">
                {successMessage}
              </p>
            )}

            <button
              className="register-submit-button verify-submit-button"
              type="submit"
              disabled={
                isVerifying ||
                isResending ||
                digits.join("").length !== 6 ||
                !email
              }
            >
              {isVerifying ? "Verifying..." : "Verify email"}
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className="verify-resend">
            <p>Didnt receive the code?</p>

            {cooldownSeconds > 0 ? (
              <p className="verify-cooldown">
                Resend available in {formatTime(cooldownSeconds)}
              </p>
            ) : (
              <button
                type="button"
                className="verify-resend-button"
                disabled={!canResend}
                onClick={() => {
                  setErrorMessage("");
                  setSuccessMessage("");
                  resendMutation.mutate();
                }}
              >
                {isResending
                  ? "Sending..."
                  : secondsLeft > 0
                    ? `Resend code in ${formatTime(secondsLeft)}`
                    : "Resend verification code"}
              </button>
            )}
          </div>

          <footer className="register-footer">
            <p>
              Wrong email address? <Link href="/register">Go back</Link>
            </p>
          </footer>

          <p className="register-security-note">
            Secure your account. Start building your workspace.
          </p>
        </div>
      </section>

      <aside className="register-visual-panel">
        <div className="register-visual-glow" />

        <div className="register-visual-content">
          <p className="register-panel-label">
            <span className="register-status-dot" />
            ONE LAST STEP
          </p>

          <h2>
            Your workspace.
            <br />
            <span>Your opportunities.</span>
          </h2>

          <p className="register-panel-description">
            Confirm your email to complete your registration and start
            bringing your customers, conversations and sales opportunities
            together in one place.
          </p>

          <div className="register-preview">
            <div className="register-preview-topbar">
              <div className="register-preview-brand">
                <span className="register-preview-icon">C</span>
                CRM Workspace
              </div>

              <span className="register-preview-status">
                <span />
                Account security
              </span>
            </div>

            <div className="verify-preview-content">
              <span className="verify-preview-icon">✓</span>
              <strong>Verify your account</strong>
              <p>Your email confirmation is the first step to getting started.</p>
            </div>

            <div className="register-preview-bottom">
              <span className="register-preview-check">✓</span>
              <span>
                <strong>Your information stays secure</strong>
                <small>One workspace. A better way to work.</small>
              </span>
            </div>
          </div>

          <div className="register-panel-bottom">
            <span>LEADS</span>
            <span>CONVERSATIONS</span>
            <span>GROWTH</span>
          </div>
        </div>
      </aside>
    </main>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <main className="register-page">
          <section className="register-form-panel">
            <div className="register-form-container">
              <p>Loading email verification...</p>
            </div>
          </section>
        </main>
      }
    >
      <VerifyEmailContent />
    </Suspense>
  );
}

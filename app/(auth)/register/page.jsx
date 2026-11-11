
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import "../../styles/register.css";
import { useMutation } from "@tanstack/react-query";
import api from "../../../lib/api";

export default function RegisterPage() {
  const router = useRouter();


  const registrationMutation = useMutation({
    mutationFn: async (registrationData) => {
      const response = await api.post("/register", registrationData);
      return response.data;
    },

    onSuccess: (_data, registrationData) => {
      const email = registrationData.email.trim().toLowerCase();

      router.push(
        `/verify-email?email=${encodeURIComponent(email)}`
      );
    },

    onError: (error, registrationData) => {
      const message = error?.response?.data?.message || "";

      if (
        error?.response?.status === 409 &&
        message.toLowerCase().includes("registration is already pending")
      ) {
        const email = registrationData.email.trim().toLowerCase();

        router.push(
          `/verify-email?email=${encodeURIComponent(email)}`
        );
      }
    },
  });


  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const registrationData = {
      fullName: formData.get("fullName").trim(),
      email: formData.get("email").trim().toLowerCase(),
      password: formData.get("password"),
      companyName: formData.get("companyName").trim(),
      companyWebsite: formData.get("companyWebsite").trim(),
    };

    registrationMutation.mutate(registrationData);
  }

  return (
    <main className="register-page">
      <section className="register-form-panel">
        <div className="register-form-container">
          <Link href="/login" className="register-brand">
            <span className="register-brand-mark">C</span>
            <span className="register-brand-name">CRM Workspace</span>
          </Link>

          <header className="register-header">
            <p className="register-eyebrow">GET STARTED</p>
            <h1>Build your workspace.</h1>
            <p className="register-description">
              Create your account and bring your team, customers, and
              opportunities together.
            </p>
          </header>

          <form className="register-form" onSubmit={handleSubmit}>
            <fieldset
              className="register-fieldset"
              disabled={registrationMutation.isPending}
            >
              <legend>YOUR ACCOUNT</legend>

              <div className="register-field">
                <label htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="register-field">
                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="register-field">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  autoComplete="new-password"   
                  required
                />
                <p className="register-field-hint">
                  Choose a password you&apos;ll  remember.
                </p>
              </div>
            </fieldset>

            <fieldset
              className="register-fieldset"
              disabled={registrationMutation.isPending}
            >
              <legend>YOUR COMPANY</legend>

              <div className="register-field">
                <label htmlFor="companyName">Company name</label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Enter your company name"
                  autoComplete="organization"
                  required
                />
              </div>

              <div className="register-field">
                <label htmlFor="companyWebsite">
                  Company website{" "}
                  <span className="register-optional">(optional)</span>
                </label>
                <input
                  id="companyWebsite"
                  name="companyWebsite"
                  type="url"
                  placeholder="https://yourcompany.com"
                  autoComplete="url"
                />
              </div>
            </fieldset>

            <button
              className="register-submit-button"
              type="submit"
              disabled={registrationMutation.isPending}
            >
              {registrationMutation.isPending
                ? "Creating account..."
                : "Create account and workspace"}
              <span aria-hidden="true">→</span>
            </button>

            {registrationMutation.isError && (
              <p role="alert">
                {registrationMutation.error?.response?.data?.message ||
                  "Could not complete registration. Please try again."}
              </p>
            )}
          </form>

          <footer className="register-footer">
            <p>
              Already have an account? <Link href="/login">Sign in</Link>
            </p>
          </footer>

          <p className="register-security-note">
            One workspace. A better way to work.
          </p>
        </div>
      </section>

      {/* Keep your existing right-side visual panel unchanged. */}
      {/* Paste your existing register-visual-panel JSX here. */}
    </main>
  );
}

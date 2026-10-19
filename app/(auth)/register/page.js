"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import "../../styles/register.css";
import { useMutation } from "@tanstack/react-query";
import api from "../../../lib/api";
export default function RegisterPage() {
  const router = useRouter();

  // Temporary navigation for frontend testing.
  // Real account and workspace creation will be connected to the backend later.

  // Send the form data to Express and track the request state.

  const registrationMutation = useMutation({
    mutationFn: async (registrationData) => {
      const response = await api.post("/register-test", registrationData);

      return response.data;
    },

    onSuccess: (data) => {
      console.log("Registration test response:", data);

      // Continue to channel setup only after Express confirms success.
      router.push("/connect-channels");
    },
  });

  function handleSubmit(event) {
    event.preventDefault();

    // Read the existing form fields without changing the design.
    const formData = new FormData(event.currentTarget);

    const registrationData = {
      fullName: formData.get("fullName").trim(),
      email: formData.get("email").trim(),
      password: formData.get("password"),
      companyName: formData.get("companyName").trim(),
      companyWebsite: formData.get("companyWebsite").trim(),
    };

    registrationMutation.mutate(registrationData);
  }

  return (
    <main className="register-page">
      {/* Left panel: account and company registration form */}
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
            <fieldset className="register-fieldset">
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
                  Choose a password you'll remember.
                </p>
              </div>
            </fieldset>

            <fieldset className="register-fieldset">
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
                ? "Testing connection..."
                : "Create account and workspace"}
              <span aria-hidden="true">→</span>
            </button>

            {registrationMutation.isSuccess && (
              <p role="status">{registrationMutation.data.message}</p>
            )}

            {registrationMutation.isError && (
              <p role="alert">
                {registrationMutation.error?.response?.data?.message ||
                  "Could not reach the CRM API. Check that the backend is running."}
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

      {/* Right panel: visual preview of the CRM workspace */}
      <aside className="register-visual-panel">
        <div className="register-visual-glow" aria-hidden="true" />

        <div className="register-visual-content">
          <div className="register-panel-label">
            <span className="register-status-dot" />A BETTER WAY TO WORK
          </div>

          <h2>
            Your business,
            <br />
            <span>working as one.</span>
          </h2>

          <p className="register-panel-description">
            Manage relationships, organise your sales pipeline, and keep your
            team moving in the same direction.
          </p>

          {/* Illustrative preview of the CRM's main modules */}
          <div className="register-preview">
            <div className="register-preview-topbar">
              <div className="register-preview-brand">
                <span className="register-preview-icon">C</span>
                Your workspace
              </div>

              <span className="register-preview-status">
                <span />
                Ready to grow
              </span>
            </div>

            <div className="register-preview-welcome">
              <span>WORKSPACE OVERVIEW</span>
              <strong>Everything starts here.</strong>
              <p>Your business, organised in one place.</p>
            </div>

            <div className="register-preview-grid">
              <div className="register-preview-card">
                <span className="register-preview-card-icon leads-card-icon">
                  L
                </span>
                <strong>Leads</strong>
                <small>Discover opportunities</small>
              </div>

              <div className="register-preview-card">
                <span className="register-preview-card-icon deals-card-icon">
                  D
                </span>
                <strong>Deals</strong>
                <small>Track your pipeline</small>
              </div>

              <div className="register-preview-card">
                <span className="register-preview-card-icon customers-card-icon">
                  C
                </span>
                <strong>Customers</strong>
                <small>Build relationships</small>
              </div>

              <div className="register-preview-card">
                <span className="register-preview-card-icon team-card-icon">
                  T
                </span>
                <strong>Teamwork</strong>
                <small>Keep everyone aligned</small>
              </div>
            </div>

            <div className="register-preview-bottom">
              <span className="register-preview-check">✓</span>
              <span>
                <strong>One connected workspace</strong>
                <small>Less scattered work. More clarity.</small>
              </span>
            </div>
          </div>

          <div className="register-panel-bottom">
            <span>YOUR TEAM.</span>
            <span>YOUR CUSTOMERS.</span>
            <span>ONE WORKSPACE.</span>
          </div>
        </div>
      </aside>
    </main>
  );
}

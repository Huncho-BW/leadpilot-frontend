"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import "../../styles/login.css";

export default function LoginPage() {
  const router = useRouter();

  // Temporary navigation for frontend testing.
  // Real credential validation will be added with authentication later.
  function handleSubmit(event) {
    event.preventDefault();
    router.push("/dashboard");
  }

  return (
    <main className="login-page">
      {/* Left panel: the actual login form */}
      <section className="login-form-panel">
        <div className="login-form-container">
          <Link href="/login" className="login-brand">
            <span className="login-brand-mark">C</span>
            <span className="login-brand-name">CRM Workspace</span>
          </Link>

          <header className="login-header">
            <p className="login-eyebrow">WELCOME BACK</p>
            <h1>Good to see you again.</h1>
            <p className="login-description">
              Sign in to access your company workspace.
            </p>
          </header>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="login-field">
              <div className="login-label-row">
                <label htmlFor="password">Password</label>
                <Link href="/forgot-password" className="login-forgot-link">
                  Forgot password?
                </Link>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            <button className="login-submit-button" type="submit">
              Sign in
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <footer className="login-footer">
            <p>
              Don't have an account?{" "}
              <Link href="/register">Create an account</Link>
            </p>
          </footer>

          <p className="login-security-note">
            Your workspace, all in one place.
          </p>
        </div>
      </section>

      {/* Right panel: a visual preview of the CRM product */}
      <aside className="login-visual-panel">
        <div className="login-visual-glow" aria-hidden="true" />

        <div className="login-visual-content">
          <div className="login-panel-label">
            <span className="login-status-dot" />
            YOUR BUSINESS, CONNECTED
          </div>

          <h2>
            Better relationships.
            <br />
            <span>Stronger business.</span>
          </h2>

          <p className="login-panel-description">
            Bring your leads, customers, and sales activities together in one
            organised workspace.
          </p>

          {/* Decorative dashboard preview; these figures are illustrative. */}
          <div className="login-preview">
            <div className="login-preview-topbar">
              <div className="login-preview-brand">
                <span className="login-preview-icon">C</span>
                Workspace overview
              </div>

              <span className="login-preview-period">Overview</span>
            </div>

            <div className="login-preview-metrics">
              <div className="login-preview-metric">
                <span>Active leads</span>
                <strong>—</strong>
                <small>Track opportunities</small>
              </div>

              <div className="login-preview-metric">
                <span>Open deals</span>
                <strong>—</strong>
                <small>Manage your pipeline</small>
              </div>
            </div>

            <div className="login-preview-activity">
              <div className="login-preview-activity-heading">
                <strong>Your workflow</strong>
                <span>Stay organised</span>
              </div>

              <div className="login-preview-row">
                <span className="login-preview-row-icon lead-icon">L</span>
                <span className="login-preview-row-copy">
                  <strong>Lead management</strong>
                  <small>Keep opportunities moving</small>
                </span>
                <span className="login-preview-row-arrow">↗</span>
              </div>

              <div className="login-preview-row">
                <span className="login-preview-row-icon task-icon">✓</span>
                <span className="login-preview-row-copy">
                  <strong>Activities and tasks</strong>
                  <small>Keep your team on track</small>
                </span>
                <span className="login-preview-row-arrow">↗</span>
              </div>
            </div>
          </div>

          <div className="login-panel-bottom">
            <span>ONE WORKSPACE.</span>
            <span>BETTER WORKFLOWS.</span>
          </div>
        </div>
      </aside>
    </main>
  );
}

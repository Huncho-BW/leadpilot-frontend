import "../../styles/reset-password.css";

export default function ResetPasswordPage() {
  return (
    <main className="reset-password-page">
      <section className="reset-password-card">
        {/* Brand */}
        <a href="/login" className="reset-password-brand">
          <span className="reset-password-brand-icon">C</span>
          <span className="reset-password-brand-name">CRM</span>
        </a>

        {/* Page heading */}
        <header className="reset-password-header">
          <div className="reset-password-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              <path d="m9 16 2 2 4-4" />
            </svg>
          </div>

          <h1>Set a new password</h1>

          <p>
            Choose a new password for your account. Make sure it&apos;s secure
            and difficult to guess.
          </p>
        </header>

        {/* New password form */}
        <form className="reset-password-form">
          <div className="reset-password-field">
            <label htmlFor="password">New password</label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Enter your new password"
              minLength={8}
              required
            />

            <span className="reset-password-hint">
              Use at least 8 characters.
            </span>
          </div>

          <div className="reset-password-field">
            <label htmlFor="confirmPassword">Confirm new password</label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder="Confirm your new password"
              minLength={8}
              required
            />
          </div>

          <button type="submit" className="reset-password-submit">
            Reset password
            <span aria-hidden="true">→</span>
          </button>
        </form>

        {/* Return to login */}
        <footer className="reset-password-footer">
          <p>
            Remembered your password? <a href="/login">Back to sign in</a>
          </p>
        </footer>
      </section>
    </main>
  );
}

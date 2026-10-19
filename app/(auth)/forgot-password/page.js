import "../../styles/forgot-password.css";

export default function ForgotPasswordPage() {
  return (
    <main className="forgot-password-page">
      <section className="forgot-password-card">
        {/* Brand */}
        <a href="/login" className="forgot-password-brand">
          <span className="forgot-password-brand-icon">C</span>
          <span className="forgot-password-brand-name">CRM</span>
        </a>

        {/* Page heading */}
        <header className="forgot-password-header">
          <h1>Forgot your password?</h1>

          <p>
            No worries. Enter the email address associated with your account,
            and we&apos;ll send you instructions to reset your password.
          </p>
        </header>

        {/* Password reset form */}
        <form className="forgot-password-form">
          <div className="forgot-password-field">
            <label htmlFor="email">Email address</label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
            />
          </div>

          <button type="submit" className="forgot-password-submit">
            Send reset instructions
          </button>
        </form>

        {/* Return to login */}
        <footer className="forgot-password-footer">
          <p>
            Remembered your password? <a href="/login">Back to sign in</a>
          </p>
        </footer>
      </section>
    </main>
  );
}

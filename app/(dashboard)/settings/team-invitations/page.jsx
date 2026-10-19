import Link from "next/link";
import "../../../styles/team-invitations.css";

export default function TeamInvitationsPage() {
  return (
    <main className="team-page">
      {/* Breadcrumb navigation */}
      <nav className="team-page__breadcrumb" aria-label="Breadcrumb">
        <Link href="/settings">Settings</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Team Management</span>
      </nav>

      {/* Page introduction */}
      <header className="team-page__header">
        <div>
          <span className="team-page__eyebrow">WORKSPACE MANAGEMENT</span>
          <h1 id="team-invitations-heading">Team Management</h1>
          <p>
            Invite people to your workspace and manage team members and their
            roles.
          </p>
        </div>
      </header>

      {/* Overview cards */}
      <section
        className="team-overview"
        aria-labelledby="team-overview-heading"
      >
        <div className="team-section__heading">
          <div>
            <h2 id="team-overview-heading">Team Overview</h2>
            <p>A quick look at your workspace membership.</p>
          </div>
        </div>

        <div className="team-overview__grid">
          <article className="team-stat-card">
            <div className="team-stat-card__top">
              <span className="team-stat-card__label">Team Members</span>
              <span className="team-stat-card__icon" aria-hidden="true">
                ♙
              </span>
            </div>
            <p className="team-stat-card__value">0</p>
            <span className="team-stat-card__note">
              Members in this workspace
            </span>
          </article>

          <article className="team-stat-card">
            <div className="team-stat-card__top">
              <span className="team-stat-card__label">Pending Invitations</span>
              <span
                className="team-stat-card__icon team-stat-card__icon--amber"
                aria-hidden="true"
              >
                ✉
              </span>
            </div>
            <p className="team-stat-card__value">0</p>
            <span className="team-stat-card__note">Awaiting a response</span>
          </article>
        </div>
      </section>

      {/* Invitation form */}
      <section className="team-section" aria-labelledby="invite-member-heading">
        <div className="team-section__heading">
          <div>
            <h2 id="invite-member-heading">Invite a Team Member</h2>
            <p>
              Add a colleague by email and choose the role they should have.
            </p>
          </div>
        </div>

        <form className="team-invite-form">
          <div className="team-form-field">
            <label htmlFor="member-email">Email Address</label>
            <input
              id="member-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@company.com"
              required
            />
            <span className="team-form-field__hint">
              Use the email address they use for work.
            </span>
          </div>

          <div className="team-form-field">
            <label htmlFor="member-role">Assign Role</label>
            <select
              id="member-role"
              name="role"
              defaultValue="salesperson"
              required
            >
              <option value="salesperson">Salesperson</option>
              <option value="manager">Manager</option>
            </select>
            <span className="team-form-field__hint">
              Permissions will depend on the assigned role.
            </span>
          </div>

          <div className="team-invite-form__actions">
            {/* Keep disabled until the invitation API is implemented. */}
            <button
              className="team-button team-button--primary"
              type="button"
              disabled
              title="Invitations will be enabled when the backend is connected"
            >
              <span aria-hidden="true">+</span>
              Send Invitation
            </button>
          </div>
        </form>
      </section>

      {/* Pending invitations table */}
      <section
        className="team-section"
        aria-labelledby="pending-invitations-heading"
      >
        <div className="team-section__heading team-section__heading--row">
          <div>
            <h2 id="pending-invitations-heading">Pending Invitations</h2>
            <p>Track invitations that have not yet been accepted.</p>
          </div>

          <span className="team-count-badge">0 pending</span>
        </div>

        <div className="team-table-wrapper">
          <table className="team-table">
            <thead>
              <tr>
                <th scope="col">Email Address</th>
                <th scope="col">Role</th>
                <th scope="col">Invited By</th>
                <th scope="col">Date Sent</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan={6}>
                  <div className="team-empty-state">
                    <span className="team-empty-state__icon" aria-hidden="true">
                      ✉
                    </span>
                    <strong>No pending invitations</strong>
                    <p>
                      Invitations you send will appear here so you can track
                      their status.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Current workspace members */}
      <section className="team-section" aria-labelledby="team-members-heading">
        <div className="team-section__heading team-section__heading--row">
          <div>
            <h2 id="team-members-heading">Team Members</h2>
            <p>Review the people who belong to this workspace.</p>
          </div>

          <span className="team-count-badge">0 members</span>
        </div>

        <div className="team-table-wrapper">
          <table className="team-table">
            <thead>
              <tr>
                <th scope="col">Member</th>
                <th scope="col">Email Address</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan={5}>
                  <div className="team-empty-state">
                    <span className="team-empty-state__icon" aria-hidden="true">
                      ♙
                    </span>
                    <strong>No team members to display</strong>
                    <p>
                      Workspace members will appear here once membership data is
                      connected.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

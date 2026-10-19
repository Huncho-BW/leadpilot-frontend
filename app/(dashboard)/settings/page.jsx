import Link from "next/link";
import "../../styles/settings.css";

export default function SettingsPage() {
  return (
    <main className="settings-page">
      {/* Page introduction */}
      <header className="settings-page__header">
        <div>
          <span className="settings-page__eyebrow">WORKSPACE CONTROL</span>

          <h1 id="settings-heading">Settings</h1>

          <p>
            Manage your workspace, team, connected channels, and CRM
            configuration from one place.
          </p>
        </div>
      </header>

      {/* Connected channels: first settings section */}
      <section
        className="settings-section"
        aria-labelledby="connected-channels-heading"
      >
        <div className="settings-section__heading">
          <div>
            <h2 id="connected-channels-heading">Connected Channels</h2>

            <p>
              Manage the social platforms your business uses to attract
              customers and acquire leads.
            </p>
          </div>
        </div>

        <article className="settings-card">
          <div className="settings-card__icon" aria-hidden="true">
            ↗
          </div>

          <div className="settings-card__content">
            <h3>Social and Messaging Integrations</h3>

            <p>
              Set up Instagram, TikTok, WhatsApp Business, Facebook, and X
              integrations to prepare your CRM for supported lead capture and
              customer enquiry workflows.
            </p>

            <span className="settings-card__meta">
              <span className="settings-status-dot" aria-hidden="true" />
              Manage your channel setup
            </span>
          </div>

          <Link
            className="settings-card__button settings-card__button--primary"
            href="/settings/connected-channels"
          >
            Manage Channels
            <span aria-hidden="true">→</span>
          </Link>
        </article>
      </section>

      {/* Workspace configuration */}
      <section
        className="settings-section"
        aria-labelledby="workspace-settings-heading"
      >
        <div className="settings-section__heading">
          <div>
            <h2 id="workspace-settings-heading">Workspace Settings</h2>

            <p>Manage your company's workspace information.</p>
          </div>
        </div>

        <article className="settings-card">
          <div className="settings-card__icon" aria-hidden="true">
            ◫
          </div>

          <div className="settings-card__content">
            <h3>Workspace Information</h3>

            <p>
              View and manage your company name, website, and other workspace
              details.
            </p>
          </div>

          {/* Enable this action when workspace editing is implemented. */}
          <button
            className="settings-card__button settings-card__button--secondary"
            type="button"
            disabled
            title="Workspace editing is not available yet"
          >
            Manage Workspace
            <span aria-hidden="true">→</span>
          </button>
        </article>
      </section>

      {/* Team administration */}
      <section
        className="settings-section"
        aria-labelledby="team-settings-heading"
      >
        <div className="settings-section__heading">
          <div>
            <h2 id="team-settings-heading">Team Management</h2>

            <p>Manage your people, invitations, and workspace roles.</p>
          </div>
        </div>

        <article className="settings-card">
          <div className="settings-card__icon" aria-hidden="true">
            ♙
          </div>

          <div className="settings-card__content">
            <h3>Team Invitations and Members</h3>

            <p>
              Invite salespeople, review team membership, and manage workspace
              roles.
            </p>
          </div>

          <Link
            className="settings-card__button settings-card__button--primary"
            href="/settings/team-invitations"
          >
            Manage Team
            <span aria-hidden="true">→</span>
          </Link>
        </article>
      </section>

      {/* Lead distribution configuration */}
      <section
        className="settings-section"
        aria-labelledby="lead-assignment-settings-heading"
      >
        <div className="settings-section__heading">
          <div>
            <h2 id="lead-assignment-settings-heading">Lead Assignment</h2>

            <p>Control how new leads are distributed to your team.</p>
          </div>
        </div>

        <article className="settings-card">
          <div className="settings-card__icon" aria-hidden="true">
            ⇄
          </div>

          <div className="settings-card__content">
            <h3>Assignment Configuration</h3>

            <p>
              Configure how leads are assigned to available team members. Random
              Pick is planned as the default strategy.
            </p>

            <span className="settings-card__meta">
              <span className="settings-status-dot" aria-hidden="true" />
              Default strategy: Random Pick
            </span>
          </div>

          <Link
            className="settings-card__button settings-card__button--primary"
            href="/settings/lead-assignment"
          >
            Configure
            <span aria-hidden="true">→</span>
          </Link>
        </article>
      </section>

      {/* Future workspace preferences */}
      <section
        className="settings-section"
        aria-labelledby="preferences-heading"
      >
        <div className="settings-section__heading">
          <div>
            <h2 id="preferences-heading">Preferences</h2>

            <p>Additional options for your workspace.</p>
          </div>
        </div>

        <article className="settings-card settings-card--muted">
          <div className="settings-card__icon" aria-hidden="true">
            ⚙
          </div>

          <div className="settings-card__content">
            <h3>Workspace Preferences</h3>

            <p>
              More CRM preferences will be available here as their requirements
              are finalized.
            </p>
          </div>

          <span className="settings-card__coming-soon">Coming later</span>
        </article>
      </section>
    </main>
  );
}

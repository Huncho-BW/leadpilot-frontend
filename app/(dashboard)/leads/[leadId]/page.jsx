import Link from "next/link";
import "../../../styles/lead-details.css";

export default function LeadDetailsPage() {
  return (
    <main className="lead-details" aria-labelledby="lead-details-heading">
      {/* Page header: breadcrumb navigation, lead status, and available actions. */}
      <header className="lead-details__header">
        <nav className="lead-details__breadcrumb" aria-label="Breadcrumb">
          <Link className="lead-details__breadcrumb-link" href="/leads">
            All Leads
          </Link>
          <span
            className="lead-details__breadcrumb-separator"
            aria-hidden="true"
          >
            /
          </span>
          <span className="lead-details__breadcrumb-current">Lead Details</span>
        </nav>

        <div className="lead-details__header-main">
          <div className="lead-details__heading-group">
            <div className="lead-details__title-row">
              <h1 className="lead-details__title" id="lead-details-heading">
                Lead Details
              </h1>
              <span className="lead-details__status lead-details__status--new">
                New Lead
              </span>
            </div>
            <p className="lead-details__description">
              View contact information, track progress, and manage this
              potential customer.
            </p>
          </div>

          <div className="lead-details__header-actions">
            <button
              className="lead-details__button lead-details__button--secondary"
              type="button"
            >
              More Actions <span aria-hidden="true">⌄</span>
            </button>
            <button
              className="lead-details__button lead-details__button--primary"
              type="button"
            >
              <span aria-hidden="true">✎</span> Edit Lead
            </button>
          </div>
        </div>

        {/* Quick actions are visual placeholders until their handlers are implemented. */}
        <div
          className="lead-details__quick-actions"
          aria-label="Lead quick actions"
        >
          <button className="lead-details__quick-action" type="button">
            <span aria-hidden="true">✉</span> Send Email
          </button>
          <button className="lead-details__quick-action" type="button">
            <span aria-hidden="true">☎</span> Log a Call
          </button>
          <button className="lead-details__quick-action" type="button">
            <span aria-hidden="true">＋</span> Add Note
          </button>
          <button className="lead-details__quick-action" type="button">
            <span aria-hidden="true">◷</span> Schedule Follow-up
          </button>
        </div>
      </header>

      {/* Summary cards give users a quick view of the lead's current position. */}
      <section className="lead-details__summary" aria-label="Lead summary">
        <article className="lead-details__summary-card">
          <span className="lead-details__summary-label">Lead Status</span>
          <strong className="lead-details__summary-value">
            <span className="lead-details__status-dot" aria-hidden="true" />
            New
          </strong>
          <span className="lead-details__summary-hint">
            Current lifecycle stage
          </span>
        </article>

        <article className="lead-details__summary-card">
          <span className="lead-details__summary-label">Lead Source</span>
          <strong className="lead-details__summary-value">—</strong>
          <span className="lead-details__summary-hint">
            Where this lead came from
          </span>
        </article>

        <article className="lead-details__summary-card">
          <span className="lead-details__summary-label">Assigned To</span>
          <strong className="lead-details__summary-value">Unassigned</strong>
          <span className="lead-details__summary-hint">
            Responsible salesperson
          </span>
        </article>

        <article className="lead-details__summary-card">
          <span className="lead-details__summary-label">Date Added</span>
          <strong className="lead-details__summary-value">—</strong>
          <span className="lead-details__summary-hint">Lead creation date</span>
        </article>
      </section>

      {/* Main content is split into lead information and an activity sidebar. */}
      <div className="lead-details__content">
        <div className="lead-details__main-column">
          <section
            className="lead-details__panel"
            aria-labelledby="contact-information-heading"
          >
            <header className="lead-details__panel-header">
              <div>
                <h2
                  className="lead-details__panel-title"
                  id="contact-information-heading"
                >
                  Contact Information
                </h2>
                <p className="lead-details__panel-description">
                  Personal and business contact details.
                </p>
              </div>
              <button
                className="lead-details__icon-button"
                type="button"
                aria-label="Edit contact information"
              >
                ✎
              </button>
            </header>

            <dl className="lead-details__info-grid">
              <div className="lead-details__info-item">
                <dt>Full Name</dt>
                <dd>—</dd>
              </div>
              <div className="lead-details__info-item">
                <dt>Email Address</dt>
                <dd>
                  <span className="lead-details__muted-value">
                    Not provided
                  </span>
                </dd>
              </div>
              <div className="lead-details__info-item">
                <dt>Phone Number</dt>
                <dd>
                  <span className="lead-details__muted-value">
                    Not provided
                  </span>
                </dd>
              </div>
              <div className="lead-details__info-item">
                <dt>Company</dt>
                <dd>—</dd>
              </div>
            </dl>
          </section>

          <section
            className="lead-details__panel"
            aria-labelledby="lead-information-heading"
          >
            <header className="lead-details__panel-header">
              <div>
                <h2
                  className="lead-details__panel-title"
                  id="lead-information-heading"
                >
                  Lead Information
                </h2>
                <p className="lead-details__panel-description">
                  Qualification and ownership details.
                </p>
              </div>
            </header>

            <dl className="lead-details__info-grid">
              <div className="lead-details__info-item">
                <dt>Status</dt>
                <dd>
                  <span className="lead-details__status lead-details__status--new">
                    New
                  </span>
                </dd>
              </div>
              <div className="lead-details__info-item">
                <dt>Lead Source</dt>
                <dd>—</dd>
              </div>
              <div className="lead-details__info-item">
                <dt>Assigned To</dt>
                <dd>Unassigned</dd>
              </div>
              <div className="lead-details__info-item">
                <dt>Date Added</dt>
                <dd>—</dd>
              </div>
              <div className="lead-details__info-item">
                <dt>Campaign</dt>
                <dd>—</dd>
              </div>
              <div className="lead-details__info-item">
                <dt>Lead Score</dt>
                <dd>
                  <span className="lead-details__score">Not scored</span>
                </dd>
              </div>
            </dl>

            <div className="lead-details__status-actions">
              <label
                className="lead-details__field-label"
                htmlFor="lead-status"
              >
                Update lead status
              </label>
              <select
                className="lead-details__input"
                id="lead-status"
                name="status"
                defaultValue="new"
              >
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="unqualified">Unqualified</option>
              </select>
              <button
                className="lead-details__button lead-details__button--secondary"
                type="button"
              >
                Update Status
              </button>
            </div>
          </section>

          <section
            className="lead-details__panel"
            aria-labelledby="lead-notes-heading"
          >
            <header className="lead-details__panel-header">
              <div>
                <h2
                  className="lead-details__panel-title"
                  id="lead-notes-heading"
                >
                  Notes
                </h2>
                <p className="lead-details__panel-description">
                  Important context and information about this lead.
                </p>
              </div>
              <button
                className="lead-details__button lead-details__button--small"
                type="button"
              >
                + Add Note
              </button>
            </header>

            <div className="lead-details__empty-state">
              <span className="lead-details__empty-icon" aria-hidden="true">
                ▤
              </span>
              <h3>No notes yet</h3>
              <p>
                Keep important details here so your team has the context it
                needs.
              </p>
              <button className="lead-details__text-button" type="button">
                Create the first note
              </button>
            </div>
          </section>
        </div>

        <aside className="lead-details__side-column">
          <section
            className="lead-details__panel"
            aria-labelledby="follow-up-heading"
          >
            <header className="lead-details__panel-header">
              <div>
                <h2
                  className="lead-details__panel-title"
                  id="follow-up-heading"
                >
                  Next Follow-up
                </h2>
                <p className="lead-details__panel-description">
                  Keep the next step on track.
                </p>
              </div>
            </header>

            <div className="lead-details__follow-up-empty">
              <span className="lead-details__follow-up-icon" aria-hidden="true">
                ◷
              </span>
              <p>No follow-up scheduled.</p>
              <button
                className="lead-details__button lead-details__button--secondary lead-details__button--full"
                type="button"
              >
                Schedule Follow-up
              </button>
            </div>
          </section>

          <section
            className="lead-details__panel"
            aria-labelledby="lead-activity-heading"
          >
            <header className="lead-details__panel-header">
              <div>
                <h2
                  className="lead-details__panel-title"
                  id="lead-activity-heading"
                >
                  Activity History
                </h2>
                <p className="lead-details__panel-description">
                  A record of interactions and changes.
                </p>
              </div>
              <button
                className="lead-details__icon-button"
                type="button"
                aria-label="View activity options"
              >
                ···
              </button>
            </header>

            <div className="lead-details__activity-empty">
              <span className="lead-details__empty-icon" aria-hidden="true">
                ↗
              </span>
              <h3>No activity recorded</h3>
              <p>
                Calls, emails, meetings, notes, and status changes will appear
                here.
              </p>
            </div>

            <button
              className="lead-details__text-button lead-details__activity-link"
              type="button"
            >
              View all activity
            </button>
          </section>
        </aside>
      </div>
    </main>
  );
}

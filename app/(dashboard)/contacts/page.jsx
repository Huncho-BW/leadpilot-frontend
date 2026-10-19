import "../../styles/communications.css";

export default function CommunicationsPage() {
  return (
    <section
      className="communications"
      aria-labelledby="communications-heading"
    >
      {/* Page header */}
      <header className="communications__header">
        <div className="communications__header-content">
          <span className="communications__eyebrow">
            CUSTOMER RELATIONSHIPS
          </span>
          <h1 className="communications__title" id="communications-heading">
            Communication &amp; Meetings
          </h1>
          <p className="communications__description">
            Review customer communications, coordinate meetings, and keep
            important conversations organized.
          </p>
        </div>

        <button className="communications__primary-button" type="button">
          <span aria-hidden="true">＋</span> Schedule Meeting
        </button>
      </header>

      {/* Communication overview */}
      <section
        className="communications__section"
        aria-labelledby="communication-overview-heading"
      >
        <div className="communications__section-heading">
          <div>
            <h2 id="communication-overview-heading">Communication Overview</h2>
            <p>A quick look at conversations and scheduled meetings.</p>
          </div>
        </div>

        <dl className="communications__metrics">
          <div className="communications__metric communications__metric--total">
            <span className="communications__metric-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 5.5h16v12H9l-5 3v-15Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 10h8M8 13.5h5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <dt>Total Communications</dt>
            <dd>—</dd>
            <p>Recorded conversations</p>
          </div>

          <div className="communications__metric communications__metric--upcoming">
            <span className="communications__metric-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="4"
                  y="6"
                  width="16"
                  height="15"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M8 3.5v5M16 3.5v5M4 10h16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <dt>Upcoming Meetings</dt>
            <dd>—</dd>
            <p>Scheduled conversations</p>
          </div>

          <div className="communications__metric communications__metric--completed">
            <span className="communications__metric-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="8.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="m8 12 2.5 2.5L16 9"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <dt>Completed Meetings</dt>
            <dd>—</dd>
            <p>Meetings already held</p>
          </div>

          <div className="communications__metric communications__metric--followup">
            <span className="communications__metric-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="8.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M12 7v5l3 2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <dt>Meetings Requiring Follow-up</dt>
            <dd>—</dd>
            <p>Follow-up still needed</p>
          </div>
        </dl>
      </section>

      {/* Communication history */}
      <section
        className="communications__panel"
        aria-labelledby="communication-history-heading"
      >
        <div className="communications__section-heading">
          <div>
            <h2 id="communication-history-heading">Communication History</h2>
            <p>Keep track of conversations with your leads and customers.</p>
          </div>
        </div>

        <form className="communications__filters">
          <div className="communications__field communications__field--search">
            <label htmlFor="communication-search">Search Communications</label>
            <input
              id="communication-search"
              name="search"
              type="search"
              placeholder="Search by contact or subject"
            />
          </div>

          <div className="communications__field">
            <label htmlFor="communication-type">Communication Type</label>
            <select
              id="communication-type"
              name="communicationType"
              defaultValue="all"
            >
              <option value="all">All Types</option>
              <option value="email">Email</option>
              <option value="call">Call</option>
              <option value="meeting">Meeting</option>
            </select>
          </div>

          <div className="communications__field">
            <label htmlFor="communication-date">Date</label>
            <input id="communication-date" name="date" type="date" />
          </div>

          <button className="communications__secondary-button" type="submit">
            Apply Filters
          </button>
        </form>

        <div className="communications__table-wrapper">
          <table className="communications__table">
            <thead>
              <tr>
                <th scope="col">Subject</th>
                <th scope="col">Type</th>
                <th scope="col">Related Contact</th>
                <th scope="col">Date</th>
                <th scope="col">Recorded By</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="communications__empty-cell" colSpan={6}>
                  <span
                    className="communications__empty-icon"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 5.5h16v12H9l-5 3v-15Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <strong>No communication records yet</strong>
                  <span>
                    Recorded calls, emails, and meetings will appear here.
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Upcoming meetings */}
      <section
        className="communications__panel"
        aria-labelledby="upcoming-meetings-heading"
      >
        <div className="communications__section-heading">
          <div>
            <h2 id="upcoming-meetings-heading">Upcoming Meetings</h2>
            <p>Stay on top of scheduled conversations and their status.</p>
          </div>
          <span className="communications__section-tag">Meeting Schedule</span>
        </div>

        <div className="communications__table-wrapper">
          <table className="communications__table">
            <thead>
              <tr>
                <th scope="col">Meeting Title</th>
                <th scope="col">Lead or Customer</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Organizer</th>
                <th scope="col">Meeting Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="communications__empty-cell" colSpan={7}>
                  <span
                    className="communications__empty-icon"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="4"
                        y="6"
                        width="16"
                        height="15"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M8 3.5v5M16 3.5v5M4 10h16"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <strong>No upcoming meetings</strong>
                  <span>Your scheduled meetings will appear here.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Meeting details */}
      <section
        className="communications__panel communications__meeting-details"
        aria-labelledby="meeting-details-heading"
      >
        <div className="communications__section-heading">
          <div>
            <h2 id="meeting-details-heading">Meeting Details</h2>
            <p>Agendas, outcomes, notes, and required follow-ups.</p>
          </div>
          <span className="communications__details-placeholder">
            No meeting selected
          </span>
        </div>

        <dl className="communications__details-grid">
          <div className="communications__detail-item">
            <dt>Meeting Agenda</dt>
            <dd>—</dd>
          </div>

          <div className="communications__detail-item">
            <dt>Meeting Notes</dt>
            <dd>—</dd>
          </div>

          <div className="communications__detail-item">
            <dt>Meeting Outcome</dt>
            <dd>—</dd>
          </div>

          <div className="communications__detail-item">
            <dt>Follow-up Required</dt>
            <dd>—</dd>
          </div>
        </dl>
      </section>
    </section>
  );
}

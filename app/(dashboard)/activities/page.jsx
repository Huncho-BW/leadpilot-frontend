import "../../styles/activities.css";

export default function ActivitiesPage() {
  return (
    <main className="activities" aria-labelledby="activities-heading">
      {/* Page header */}
      <header className="activities__header">
        <div className="activities__header-content">
          <span className="activities__eyebrow">SALES WORKSPACE</span>
          <h1 className="activities__title" id="activities-heading">
            Activities and Tasks
          </h1>
          <p className="activities__description">
            Track customer interactions, manage follow-up tasks, and keep your
            sales activities organized.
          </p>
        </div>

        <button className="activities__primary-button" type="button">
          <span aria-hidden="true">+</span>
          Add Activity
        </button>
      </header>

      {/* Activity overview */}
      <section
        className="activities__overview"
        aria-labelledby="activity-overview-heading"
      >
        <div className="activities__section-heading">
          <div>
            <h2
              className="activities__section-title"
              id="activity-overview-heading"
            >
              Activity Overview
            </h2>
            <p className="activities__section-description">
              Keep track of tasks and customer interactions.
            </p>
          </div>
        </div>

        <dl className="activities__stats-grid">
          <div className="activities__stat-card activities__stat-card--total">
            <div className="activities__stat-top">
              <dt className="activities__stat-label">Total Activities</dt>
              <span className="activities__stat-icon" aria-hidden="true">
                ◷
              </span>
            </div>
            <dd className="activities__stat-value">—</dd>
            <span className="activities__stat-note">
              All logged interactions
            </span>
          </div>

          <div className="activities__stat-card activities__stat-card--upcoming">
            <div className="activities__stat-top">
              <dt className="activities__stat-label">Upcoming Tasks</dt>
              <span className="activities__stat-icon" aria-hidden="true">
                ◷
              </span>
            </div>
            <dd className="activities__stat-value">—</dd>
            <span className="activities__stat-note">Tasks scheduled ahead</span>
          </div>

          <div className="activities__stat-card activities__stat-card--overdue">
            <div className="activities__stat-top">
              <dt className="activities__stat-label">Overdue Tasks</dt>
              <span className="activities__stat-icon" aria-hidden="true">
                !
              </span>
            </div>
            <dd className="activities__stat-value">—</dd>
            <span className="activities__stat-note">
              Tasks needing attention
            </span>
          </div>

          <div className="activities__stat-card activities__stat-card--completed">
            <div className="activities__stat-top">
              <dt className="activities__stat-label">Completed Tasks</dt>
              <span className="activities__stat-icon" aria-hidden="true">
                ✓
              </span>
            </div>
            <dd className="activities__stat-value">—</dd>
            <span className="activities__stat-note">Finished tasks</span>
          </div>
        </dl>
      </section>

      {/* Activity categories */}
      <section
        className="activities__types-section"
        aria-labelledby="activity-types-heading"
      >
        <div className="activities__section-heading">
          <div>
            <h2
              className="activities__section-title"
              id="activity-types-heading"
            >
              Activity Types
            </h2>
            <p className="activities__section-description">
              The different ways your team can record customer interactions.
            </p>
          </div>
        </div>

        <ul className="activities__types-grid">
          <li className="activities__type-card">
            <span
              className="activities__type-icon activities__type-icon--call"
              aria-hidden="true"
            >
              ☎
            </span>
            <span className="activities__type-name">Calls</span>
            <span className="activities__type-description">
              Log customer calls
            </span>
          </li>

          <li className="activities__type-card">
            <span
              className="activities__type-icon activities__type-icon--email"
              aria-hidden="true"
            >
              ✉
            </span>
            <span className="activities__type-name">Emails</span>
            <span className="activities__type-description">
              Track email communication
            </span>
          </li>

          <li className="activities__type-card">
            <span
              className="activities__type-icon activities__type-icon--meeting"
              aria-hidden="true"
            >
              ▦
            </span>
            <span className="activities__type-name">Meetings</span>
            <span className="activities__type-description">
              Record customer meetings
            </span>
          </li>

          <li className="activities__type-card">
            <span
              className="activities__type-icon activities__type-icon--task"
              aria-hidden="true"
            >
              ✓
            </span>
            <span className="activities__type-name">Follow-up Tasks</span>
            <span className="activities__type-description">
              Stay on top of next steps
            </span>
          </li>

          <li className="activities__type-card">
            <span
              className="activities__type-icon activities__type-icon--note"
              aria-hidden="true"
            >
              ≡
            </span>
            <span className="activities__type-name">Notes</span>
            <span className="activities__type-description">
              Keep useful customer notes
            </span>
          </li>
        </ul>
      </section>

      {/* Search and filters */}
      <section
        className="activities__filters-section"
        aria-labelledby="activity-filters-heading"
      >
        <div className="activities__section-heading">
          <div>
            <h2
              className="activities__section-title"
              id="activity-filters-heading"
            >
              Find Activities
            </h2>
            <p className="activities__section-description">
              Narrow down activities by type, status, or due date.
            </p>
          </div>
        </div>

        <form className="activities__filters">
          <div className="activities__field activities__field--search">
            <label className="activities__label" htmlFor="activity-search">
              Search Activities
            </label>
            <input
              className="activities__input"
              id="activity-search"
              name="search"
              type="search"
              placeholder="Search by title or related lead"
            />
          </div>

          <div className="activities__field">
            <label className="activities__label" htmlFor="activity-type">
              Activity Type
            </label>
            <select
              className="activities__input activities__select"
              id="activity-type"
              name="activityType"
              defaultValue="all"
            >
              <option value="all">All Types</option>
              <option value="call">Calls</option>
              <option value="email">Emails</option>
              <option value="meeting">Meetings</option>
              <option value="task">Follow-up Tasks</option>
              <option value="note">Notes</option>
            </select>
          </div>

          <div className="activities__field">
            <label className="activities__label" htmlFor="activity-status">
              Task Status
            </label>
            <select
              className="activities__input activities__select"
              id="activity-status"
              name="activityStatus"
              defaultValue="all"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>

          <div className="activities__field">
            <label className="activities__label" htmlFor="activity-date">
              Due Date
            </label>
            <input
              className="activities__input"
              id="activity-date"
              name="dueDate"
              type="date"
            />
          </div>

          <button className="activities__filter-button" type="submit">
            Apply Filters
          </button>
        </form>
      </section>

      {/* Activities table */}
      <section
        className="activities__list-section"
        aria-labelledby="activity-list-heading"
      >
        <div className="activities__list-header">
          <div>
            <h2
              className="activities__section-title"
              id="activity-list-heading"
            >
              All Activities
            </h2>
            <p className="activities__section-description">
              Review customer interactions and task progress.
            </p>
          </div>

          <span className="activities__record-count">— records</span>
        </div>

        <div className="activities__table-wrapper">
          <table className="activities__table">
            <caption className="activities__sr-only">
              Sales activities and task records
            </caption>

            <thead className="activities__table-head">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Type</th>
                <th scope="col">Related Lead or Customer</th>
                <th scope="col">Assigned To</th>
                <th scope="col">Due Date</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="activities__empty-cell" colSpan={7}>
                  <span className="activities__empty-icon" aria-hidden="true">
                    ◷
                  </span>
                  <span className="activities__empty-title">
                    No activities yet
                  </span>
                  <span className="activities__empty-description">
                    Your logged calls, meetings, notes, and tasks will appear
                    here.
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Task details placeholder */}
      <section
        className="activities__task-panel"
        aria-labelledby="task-details-heading"
      >
        <div className="activities__task-icon" aria-hidden="true">
          ✓
        </div>

        <div className="activities__task-content">
          <h2 className="activities__section-title" id="task-details-heading">
            Task Details
          </h2>
          <p className="activities__section-description">
            Select a task to review its description, related customer, assigned
            team member, deadline, and completion information.
          </p>
        </div>
      </section>
    </main>
  );
}

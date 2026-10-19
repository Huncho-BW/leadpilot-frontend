import "../../styles/lead-assignments.css";

export default function LeadAssignmentsPage() {
  return (
    <main className="assignments" aria-labelledby="lead-assignments-heading">
      {/* Page header */}
      <header className="assignments__header">
        <div className="assignments__header-content">
          <span className="assignments__eyebrow">TEAM WORKSPACE</span>
          <h1 className="assignments__title" id="lead-assignments-heading">
            Lead Assignment
          </h1>
          <p className="assignments__description">
            Manage lead ownership and review how work is distributed across your
            sales team.
          </p>
        </div>

        <button className="assignments__primary-button" type="button">
          <span aria-hidden="true">+</span>
          Assign Leads
        </button>
      </header>

      {/* Assignment overview */}
      <section
        className="assignments__overview"
        aria-labelledby="assignment-overview-heading"
      >
        <div className="assignments__section-heading">
          <div>
            <h2
              className="assignments__section-title"
              id="assignment-overview-heading"
            >
              Assignment Overview
            </h2>
            <p className="assignments__section-description">
              A summary of lead ownership in your workspace.
            </p>
          </div>
        </div>

        <dl className="assignments__stats-grid">
          <div className="assignments__stat-card assignments__stat-card--total">
            <div className="assignments__stat-top">
              <dt className="assignments__stat-label">Total Leads</dt>
              <span className="assignments__stat-icon" aria-hidden="true">
                ◫
              </span>
            </div>
            <dd className="assignments__stat-value">—</dd>
            <span className="assignments__stat-note">
              Leads in your workspace
            </span>
          </div>

          <div className="assignments__stat-card assignments__stat-card--assigned">
            <div className="assignments__stat-top">
              <dt className="assignments__stat-label">Assigned Leads</dt>
              <span className="assignments__stat-icon" aria-hidden="true">
                ✓
              </span>
            </div>
            <dd className="assignments__stat-value">—</dd>
            <span className="assignments__stat-note">Leads with an owner</span>
          </div>

          <div className="assignments__stat-card assignments__stat-card--unassigned">
            <div className="assignments__stat-top">
              <dt className="assignments__stat-label">Unassigned Leads</dt>
              <span className="assignments__stat-icon" aria-hidden="true">
                !
              </span>
            </div>
            <dd className="assignments__stat-value">—</dd>
            <span className="assignments__stat-note">
              Leads waiting for ownership
            </span>
          </div>
        </dl>
      </section>

      {/* Search and filters */}
      <section
        className="assignments__filter-section"
        aria-labelledby="assignment-filters-heading"
      >
        <div className="assignments__section-heading">
          <div>
            <h2
              className="assignments__section-title"
              id="assignment-filters-heading"
            >
              Find Leads
            </h2>
            <p className="assignments__section-description">
              Search and filter leads by owner or assignment status.
            </p>
          </div>
        </div>

        <form className="assignments__filters">
          <div className="assignments__field assignments__field--search">
            <label className="assignments__label" htmlFor="assignment-search">
              Search Leads
            </label>
            <input
              className="assignments__input"
              id="assignment-search"
              name="search"
              type="search"
              placeholder="Search by lead name or company"
            />
          </div>

          <div className="assignments__field">
            <label className="assignments__label" htmlFor="assignment-status">
              Assignment Status
            </label>
            <select
              className="assignments__input assignments__select"
              id="assignment-status"
              name="assignmentStatus"
              defaultValue="all"
            >
              <option value="all">All Leads</option>
              <option value="assigned">Assigned</option>
              <option value="unassigned">Unassigned</option>
            </select>
          </div>

          <div className="assignments__field">
            <label
              className="assignments__label"
              htmlFor="assignment-salesperson"
            >
              Salesperson
            </label>
            <select
              className="assignments__input assignments__select"
              id="assignment-salesperson"
              name="salesperson"
              defaultValue="all"
            >
              <option value="all">All Salespeople</option>
            </select>
          </div>

          <button className="assignments__filter-button" type="submit">
            Apply Filters
          </button>
        </form>
      </section>

      {/* Lead assignment table */}
      <section
        className="assignments__list-section"
        aria-labelledby="assignment-list-heading"
      >
        <div className="assignments__list-header">
          <div>
            <h2
              className="assignments__section-title"
              id="assignment-list-heading"
            >
              Lead Assignments
            </h2>
            <p className="assignments__section-description">
              Review who is responsible for each lead.
            </p>
          </div>

          <span className="assignments__record-count">— records</span>
        </div>

        <div className="assignments__table-wrapper">
          <table className="assignments__table">
            <caption className="assignments__sr-only">
              Lead ownership and assignment records
            </caption>

            <thead className="assignments__table-head">
              <tr>
                <th scope="col">Lead Name</th>
                <th scope="col">Company</th>
                <th scope="col">Current Salesperson</th>
                <th scope="col">Lead Status</th>
                <th scope="col">Date Assigned</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="assignments__empty-cell" colSpan={6}>
                  <span className="assignments__empty-icon" aria-hidden="true">
                    ↗
                  </span>
                  <span className="assignments__empty-title">
                    No lead assignments yet
                  </span>
                  <span className="assignments__empty-description">
                    Lead assignment records will appear here when data is
                    connected.
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Assignment management */}
      <section
        className="assignments__manage-section"
        aria-labelledby="manage-assignment-heading"
      >
        <div className="assignments__manage-icon" aria-hidden="true">
          <span>⇄</span>
        </div>

        <div className="assignments__manage-content">
          <h2
            className="assignments__section-title"
            id="manage-assignment-heading"
          >
            Manage Assignment
          </h2>
          <p className="assignments__section-description">
            Assign new leads or move existing leads to another eligible
            salesperson. Assignment rules will be connected later.
          </p>
        </div>

        <button
          className="assignments__secondary-button"
          type="button"
          disabled
        >
          Assign or Reassign Lead
        </button>
      </section>
    </main>
  );
}

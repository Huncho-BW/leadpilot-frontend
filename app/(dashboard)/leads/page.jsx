import AddLeadForm from "./components/AddLeadForm";
import "../../styles/leads.css";

export default function LeadsPage() {
  return (
    <main className="leads" aria-labelledby="leads-heading">
      {/* Page header and primary action */}
      <header className="leads__header">
        <div className="leads__header-content">
          <h1 className="leads__title" id="leads-heading">
            Lead Management
          </h1>
          <p className="leads__description">
            Manage potential customers and track their progress.
          </p>
        </div>

        {/* The button is ready for its Add Lead interaction later. */}
        <button className="leads__add-button" type="button">
          <span className="leads__add-icon" aria-hidden="true">
            +
          </span>
          Add Lead
        </button>
      </header>

      {/* Lead overview summary cards */}
      <section
        className="leads__overview"
        aria-labelledby="lead-overview-heading"
      >
        <div className="leads__section-heading">
          <h2 className="leads__section-title" id="lead-overview-heading">
            Lead Overview
          </h2>
          <p className="leads__section-description">
            Get a quick view of your sales pipeline.
          </p>
        </div>

        <dl className="leads__stats-grid">
          <div className="leads__stat-card leads__stat-card--total">
            <dt className="leads__stat-label">Total Leads</dt>
            <dd className="leads__stat-value">—</dd>
            <span className="leads__stat-note">
              All leads in your workspace
            </span>
          </div>

          <div className="leads__stat-card leads__stat-card--new">
            <dt className="leads__stat-label">New Leads</dt>
            <dd className="leads__stat-value">—</dd>
            <span className="leads__stat-note">Recently added leads</span>
          </div>

          <div className="leads__stat-card leads__stat-card--qualified">
            <dt className="leads__stat-label">Qualified Leads</dt>
            <dd className="leads__stat-value">—</dd>
            <span className="leads__stat-note">
              Leads ready for the next step
            </span>
          </div>

          <div className="leads__stat-card leads__stat-card--follow-up">
            <dt className="leads__stat-label">Awaiting Follow-up</dt>
            <dd className="leads__stat-value">—</dd>
            <span className="leads__stat-note">Leads needing attention</span>
          </div>
        </dl>
      </section>

      {/* Lead lifecycle stages */}
      <section
        className="leads__lifecycle"
        aria-labelledby="lead-lifecycle-heading"
      >
        <header className="leads__section-heading">
          <h2 className="leads__section-title" id="lead-lifecycle-heading">
            Lead Lifecycle
          </h2>
          <p className="leads__section-description">
            Understand the stages a potential customer moves through.
          </p>
        </header>

        <ol className="leads__lifecycle-grid">
          <li className="leads__lifecycle-item leads__lifecycle-item--new">
            <article className="leads__stage-card">
              <span className="leads__stage-indicator" aria-hidden="true" />
              <h3 className="leads__stage-title">New</h3>
              <p className="leads__stage-description">Recently added leads.</p>
            </article>
          </li>

          <li className="leads__lifecycle-item leads__lifecycle-item--contacted">
            <article className="leads__stage-card">
              <span className="leads__stage-indicator" aria-hidden="true" />
              <h3 className="leads__stage-title">Contacted</h3>
              <p className="leads__stage-description">
                Leads that have been contacted.
              </p>
            </article>
          </li>

          <li className="leads__lifecycle-item leads__lifecycle-item--qualified">
            <article className="leads__stage-card">
              <span className="leads__stage-indicator" aria-hidden="true" />
              <h3 className="leads__stage-title">Qualified</h3>
              <p className="leads__stage-description">
                Leads that meet the company's criteria.
              </p>
            </article>
          </li>

          <li className="leads__lifecycle-item leads__lifecycle-item--unqualified">
            <article className="leads__stage-card">
              <span className="leads__stage-indicator" aria-hidden="true" />
              <h3 className="leads__stage-title">Unqualified</h3>
              <p className="leads__stage-description">
                Leads that do not currently meet the criteria.
              </p>
            </article>
          </li>
        </ol>
      </section>

      {/* Lead search, filters, and records table */}
      <section
        className="leads__list-section"
        aria-labelledby="lead-list-heading"
      >
        <header className="leads__section-heading leads__list-heading">
          <div>
            <h2 className="leads__section-title" id="lead-list-heading">
              All Leads
            </h2>
            <p className="leads__section-description">
              View and organize potential customers.
            </p>
          </div>

          <span className="leads__record-count">— leads</span>
        </header>

        {/* Search and filter controls; behavior will be connected later. */}
        <form className="leads__filters" aria-label="Search and filter leads">
          <div className="leads__search-field">
            <label className="leads__field-label" htmlFor="lead-search">
              Search leads
            </label>
            <input
              className="leads__input leads__input--search"
              id="lead-search"
              name="search"
              type="search"
              placeholder="Search by name, company, or email"
            />
          </div>

          <div className="leads__filter-field">
            <label className="leads__field-label" htmlFor="lead-status">
              Filter by status
            </label>
            <select
              className="leads__input leads__select"
              id="lead-status"
              name="status"
              defaultValue=""
            >
              <option value="">All statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="unqualified">Unqualified</option>
            </select>
          </div>

          <div className="leads__filter-field">
            <label className="leads__field-label" htmlFor="lead-source">
              Filter by source
            </label>
            <select
              className="leads__input leads__select"
              id="lead-source"
              name="source"
              defaultValue=""
            >
              <option value="">All sources</option>
              <option value="website">Website</option>
              <option value="referral">Referral</option>
              <option value="social-media">Social media</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button className="leads__filter-button" type="submit">
            Apply Filters
          </button>
        </form>

        {/* The table will render API records when lead data is connected. */}
        <div className="leads__table-wrapper">
          <table className="leads__table">
            <caption className="leads__table-caption">
              List of potential customers
            </caption>

            <thead className="leads__table-head">
              <tr>
                <th scope="col">Lead Name</th>
                <th scope="col">Company</th>
                <th scope="col">Email</th>
                <th scope="col">Source</th>
                <th scope="col">Status</th>
                <th scope="col">Assigned To</th>
                <th scope="col">Date Added</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody className="leads__table-body">
              <tr className="leads__empty-row">
                <td className="leads__empty-cell" colSpan={8}>
                  <span className="leads__empty-icon" aria-hidden="true">
                    ♧
                  </span>
                  <span className="leads__empty-title">
                    No leads to display yet
                  </span>
                  <span className="leads__empty-description">
                    Add your first lead to start building your pipeline.
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Existing lead creation component */}
      <section
        className="leads__create-section"
        aria-labelledby="add-lead-section-heading"
      >
        <header className="leads__section-heading">
          <h2 className="leads__section-title" id="add-lead-section-heading">
            Create a Lead
          </h2>
          <p className="leads__section-description">
            Add a potential customer to your workspace.
          </p>
        </header>

        <div className="leads__form-container">
          <AddLeadForm />
        </div>
      </section>
    </main>
  );
}

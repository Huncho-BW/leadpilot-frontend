import "../../styles/deals.css";

export default function DealsPage() {
  const pipelineStages = [
    {
      name: "Qualification",
      description: "Evaluate the opportunity",
      className: "deals__stage--qualification",
    },
    {
      name: "Proposal",
      description: "Present an offer",
      className: "deals__stage--proposal",
    },
    {
      name: "Negotiation",
      description: "Discuss terms",
      className: "deals__stage--negotiation",
    },
    {
      name: "Won",
      description: "Successfully closed",
      className: "deals__stage--won",
    },
    {
      name: "Lost",
      description: "Unsuccessful opportunity",
      className: "deals__stage--lost",
    },
  ];

  return (
    <main className="deals" aria-labelledby="deals-heading">
      {/* Page header */}
      <header className="deals__header">
        <div className="deals__header-content">
          <span className="deals__eyebrow">SALES WORKSPACE</span>
          <h1 className="deals__title" id="deals-heading">
            Deal Management
          </h1>
          <p className="deals__description">
            Track sales opportunities, monitor deal progress, and manage
            potential revenue.
          </p>
        </div>

        <button className="deals__primary-button" type="button">
          <span aria-hidden="true">+</span>
          Add Deal
        </button>
      </header>

      {/* Deal overview */}
      <section
        className="deals__overview"
        aria-labelledby="deal-overview-heading"
      >
        <div className="deals__section-heading">
          <div>
            <h2 className="deals__section-title" id="deal-overview-heading">
              Deal Overview
            </h2>
            <p className="deals__section-description">
              Get a snapshot of your sales opportunities and potential revenue.
            </p>
          </div>
        </div>

        <dl className="deals__stats-grid">
          <div className="deals__stat-card">
            <div className="deals__stat-top">
              <dt className="deals__stat-label">Total Deals</dt>
              <span
                className="deals__stat-icon deals__stat-icon--total"
                aria-hidden="true"
              >
                ◫
              </span>
            </div>
            <dd className="deals__stat-value">—</dd>
            <span className="deals__stat-note">All opportunities</span>
          </div>

          <div className="deals__stat-card">
            <div className="deals__stat-top">
              <dt className="deals__stat-label">Open Deals</dt>
              <span
                className="deals__stat-icon deals__stat-icon--open"
                aria-hidden="true"
              >
                ◷
              </span>
            </div>
            <dd className="deals__stat-value">—</dd>
            <span className="deals__stat-note">Currently in progress</span>
          </div>

          <div className="deals__stat-card">
            <div className="deals__stat-top">
              <dt className="deals__stat-label">Won Deals</dt>
              <span
                className="deals__stat-icon deals__stat-icon--won"
                aria-hidden="true"
              >
                ✓
              </span>
            </div>
            <dd className="deals__stat-value">—</dd>
            <span className="deals__stat-note">Successfully closed</span>
          </div>

          <div className="deals__stat-card">
            <div className="deals__stat-top">
              <dt className="deals__stat-label">Lost Deals</dt>
              <span
                className="deals__stat-icon deals__stat-icon--lost"
                aria-hidden="true"
              >
                ×
              </span>
            </div>
            <dd className="deals__stat-value">—</dd>
            <span className="deals__stat-note">Unsuccessful opportunities</span>
          </div>

          <div className="deals__stat-card deals__stat-card--revenue">
            <div className="deals__stat-top">
              <dt className="deals__stat-label">Total Open Deal Value</dt>
              <span
                className="deals__stat-icon deals__stat-icon--revenue"
                aria-hidden="true"
              >
                ₦
              </span>
            </div>
            <dd className="deals__stat-value">—</dd>
            <span className="deals__stat-note">
              Potential revenue in progress
            </span>
          </div>
        </dl>
      </section>

      {/* Sales pipeline */}
      <section
        className="deals__pipeline-section"
        aria-labelledby="sales-pipeline-heading"
      >
        <div className="deals__section-heading">
          <div>
            <h2 className="deals__section-title" id="sales-pipeline-heading">
              Sales Pipeline
            </h2>
            <p className="deals__section-description">
              Follow the stages an opportunity moves through before closing.
            </p>
          </div>

          <span className="deals__pipeline-caption">5 stages</span>
        </div>

        <ol className="deals__pipeline">
          {pipelineStages.map((stage, index) => (
            <li className={`deals__stage ${stage.className}`} key={stage.name}>
              <span className="deals__stage-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="deals__stage-name">{stage.name}</span>
              <span className="deals__stage-description">
                {stage.description}
              </span>
              <span className="deals__stage-count">— deals</span>
            </li>
          ))}
        </ol>

        <p className="deals__pipeline-note">
          Pipeline stages are a proposed starting point and can be finalized
          before workflow logic is implemented.
        </p>
      </section>

      {/* Search and filters */}
      <section
        className="deals__filters-section"
        aria-labelledby="deal-filters-heading"
      >
        <div className="deals__section-heading">
          <div>
            <h2 className="deals__section-title" id="deal-filters-heading">
              Find Deals
            </h2>
            <p className="deals__section-description">
              Search opportunities by name, stage, or owner.
            </p>
          </div>
        </div>

        <form className="deals__filters">
          <div className="deals__field deals__field--search">
            <label className="deals__label" htmlFor="deal-search">
              Search Deals
            </label>
            <input
              className="deals__input"
              id="deal-search"
              name="search"
              type="search"
              placeholder="Search by deal name or customer"
            />
          </div>

          <div className="deals__field">
            <label className="deals__label" htmlFor="deal-stage">
              Deal Stage
            </label>
            <select
              className="deals__input deals__select"
              id="deal-stage"
              name="stage"
              defaultValue="all"
            >
              <option value="all">All Stages</option>
              <option value="qualification">Qualification</option>
              <option value="proposal">Proposal</option>
              <option value="negotiation">Negotiation</option>
              <option value="won">Won</option>
              <option value="lost">Lost</option>
            </select>
          </div>

          <div className="deals__field">
            <label className="deals__label" htmlFor="deal-owner">
              Assigned To
            </label>
            <select
              className="deals__input deals__select"
              id="deal-owner"
              name="assignedTo"
              defaultValue="all"
            >
              <option value="all">All Salespeople</option>
            </select>
          </div>

          <button className="deals__filter-button" type="submit">
            Apply Filters
          </button>
        </form>
      </section>

      {/* Deals table */}
      <section
        className="deals__list-section"
        aria-labelledby="deal-list-heading"
      >
        <div className="deals__list-header">
          <div>
            <h2 className="deals__section-title" id="deal-list-heading">
              All Deals
            </h2>
            <p className="deals__section-description">
              Review opportunity values, ownership, and expected closing dates.
            </p>
          </div>

          <span className="deals__record-count">— records</span>
        </div>

        <div className="deals__table-wrapper">
          <table className="deals__table">
            <caption className="deals__sr-only">
              Sales deals and opportunity records
            </caption>

            <thead className="deals__table-head">
              <tr>
                <th scope="col">Deal Name</th>
                <th scope="col">Customer</th>
                <th scope="col">Deal Value</th>
                <th scope="col">Stage</th>
                <th scope="col">Assigned To</th>
                <th scope="col">Expected Close Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="deals__empty-cell" colSpan={7}>
                  <span className="deals__empty-icon" aria-hidden="true">
                    ◫
                  </span>
                  <span className="deals__empty-title">
                    No deals to display yet
                  </span>
                  <span className="deals__empty-description">
                    Your sales opportunities will appear here once they are
                    added to the workspace.
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Deal details */}
      <section
        className="deals__details-section"
        aria-labelledby="deal-details-heading"
      >
        <div className="deals__section-heading">
          <div>
            <h2 className="deals__section-title" id="deal-details-heading">
              Deal Details
            </h2>
            <p className="deals__section-description">
              Details for the selected sales opportunity.
            </p>
          </div>
        </div>

        <dl className="deals__details-grid">
          <div className="deals__detail-item">
            <dt className="deals__detail-label">Description</dt>
            <dd className="deals__detail-value">—</dd>
          </div>

          <div className="deals__detail-item">
            <dt className="deals__detail-label">Related Customer</dt>
            <dd className="deals__detail-value">—</dd>
          </div>

          <div className="deals__detail-item">
            <dt className="deals__detail-label">Created Date</dt>
            <dd className="deals__detail-value">—</dd>
          </div>

          <div className="deals__detail-item">
            <dt className="deals__detail-label">Last Updated</dt>
            <dd className="deals__detail-value">—</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}

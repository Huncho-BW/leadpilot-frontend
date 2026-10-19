import "../../styles/reports.css";

export default function ReportsPage() {
  return (
    <section className="reports" aria-labelledby="reports-heading">
      {/* Page header */}
      <header className="reports__header">
        <div className="reports__header-content">
          <span className="reports__eyebrow">WORKSPACE INSIGHTS</span>
          <h1 className="reports__title" id="reports-heading">
            Reports &amp; Analytics
          </h1>
          <p className="reports__description">
            Review sales performance, lead conversion, deal outcomes, and team
            activity across your workspace.
          </p>
        </div>

        <button className="reports__primary-button" type="button">
          <span aria-hidden="true">＋</span> Generate Report
        </button>
      </header>

      {/* Reporting filters */}
      <section
        className="reports__panel reports__filters"
        aria-labelledby="report-filters-heading"
      >
        <div className="reports__section-heading">
          <div>
            <h2 id="report-filters-heading">Report Filters</h2>
            <p>Choose the report and time period you want to review.</p>
          </div>
        </div>

        <form className="reports__filter-form">
          <div className="reports__field">
            <label htmlFor="report-type">Report Type</label>
            <select
              id="report-type"
              name="reportType"
              defaultValue="sales-performance"
            >
              <option value="sales-performance">Sales Performance</option>
              <option value="lead-conversion">Lead Conversion</option>
              <option value="deal-outcomes">Deal Outcomes</option>
              <option value="team-activity">Team Activity</option>
            </select>
          </div>

          <div className="reports__field">
            <label htmlFor="report-start-date">Start Date</label>
            <input id="report-start-date" name="startDate" type="date" />
          </div>

          <div className="reports__field">
            <label htmlFor="report-end-date">End Date</label>
            <input id="report-end-date" name="endDate" type="date" />
          </div>

          {/* Filtering will be connected to report data later. */}
          <button className="reports__secondary-button" type="submit">
            Apply Filters
          </button>
        </form>
      </section>

      {/* Performance summary */}
      <section
        className="reports__section"
        aria-labelledby="performance-summary-heading"
      >
        <div className="reports__section-heading">
          <div>
            <h2 id="performance-summary-heading">Performance Summary</h2>
            <p>A snapshot of your workspace performance.</p>
          </div>
          <span className="reports__period-label">Selected period</span>
        </div>

        <dl className="reports__metrics">
          <div className="reports__metric reports__metric--leads">
            <span className="reports__metric-icon" aria-hidden="true">
              ↗
            </span>
            <dt>Total Leads</dt>
            <dd>—</dd>
            <p>Leads created during this period</p>
          </div>

          <div className="reports__metric reports__metric--conversion">
            <span className="reports__metric-icon" aria-hidden="true">
              %
            </span>
            <dt>Lead Conversion Rate</dt>
            <dd>—</dd>
            <p>Leads converted into customers</p>
          </div>

          <div className="reports__metric reports__metric--deals">
            <span className="reports__metric-icon" aria-hidden="true">
              ✓
            </span>
            <dt>Deals Won</dt>
            <dd>—</dd>
            <p>Successfully closed deals</p>
          </div>

          <div className="reports__metric reports__metric--revenue">
            <span className="reports__metric-icon" aria-hidden="true">
              ₦
            </span>
            <dt>Revenue from Won Deals</dt>
            <dd>—</dd>
            <p>Value of successfully closed deals</p>
          </div>
        </dl>
      </section>

      {/* Analytics chart placeholders */}
      <section className="reports__charts">
        <article
          className="reports__panel reports__chart-panel"
          aria-labelledby="sales-performance-heading"
        >
          <div className="reports__section-heading">
            <div>
              <h2 id="sales-performance-heading">Sales Performance</h2>
              <p>Track sales trends over the selected period.</p>
            </div>
            <span className="reports__chart-tag">Sales</span>
          </div>

          <div
            className="reports__chart-placeholder"
            role="img"
            aria-label="Placeholder for the sales performance chart"
          >
            <div className="reports__chart-symbol" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <path
                  d="M7 38V10M7 38H42"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 30L21 22L28 26L40 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Sales performance chart</h3>
            <p>
              Your sales trends will appear here when analytics are connected.
            </p>
          </div>
        </article>

        <article
          className="reports__panel reports__chart-panel"
          aria-labelledby="lead-conversion-heading"
        >
          <div className="reports__section-heading">
            <div>
              <h2 id="lead-conversion-heading">Lead Conversion</h2>
              <p>See how leads progress through your sales process.</p>
            </div>
            <span className="reports__chart-tag">Leads</span>
          </div>

          <div
            className="reports__chart-placeholder"
            role="img"
            aria-label="Placeholder for the lead conversion chart"
          >
            <div className="reports__chart-symbol" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <path
                  d="M8 12H40L31 23H17L8 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 23L20 35H28L31 23"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Lead conversion chart</h3>
            <p>
              Conversion trends will appear here when lead data is available.
            </p>
          </div>
        </article>
      </section>

      {/* Deal outcomes */}
      <section
        className="reports__panel reports__table-panel"
        aria-labelledby="deal-outcomes-heading"
      >
        <div className="reports__section-heading">
          <div>
            <h2 id="deal-outcomes-heading">Deal Outcomes</h2>
            <p>Compare the value and number of deals by outcome.</p>
          </div>
        </div>

        <div className="reports__table-wrapper">
          <table className="reports__table">
            <thead>
              <tr>
                <th scope="col">Outcome</th>
                <th scope="col">Number of Deals</th>
                <th scope="col">Total Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="reports__outcome reports__outcome--won">
                    Won
                  </span>
                </td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>
                  <span className="reports__outcome reports__outcome--lost">
                    Lost
                  </span>
                </td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>
                  <span className="reports__outcome reports__outcome--open">
                    Open
                  </span>
                </td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Team activity */}
      <section
        className="reports__panel reports__table-panel"
        aria-labelledby="team-activity-heading"
      >
        <div className="reports__section-heading">
          <div>
            <h2 id="team-activity-heading">Team Activity</h2>
            <p>Review completed activities and outcomes across your team.</p>
          </div>
        </div>

        <div className="reports__table-wrapper">
          <table className="reports__table">
            <thead>
              <tr>
                <th scope="col">Team Member</th>
                <th scope="col">Activities Completed</th>
                <th scope="col">Tasks Completed</th>
                <th scope="col">Deals Won</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="reports__empty-cell" colSpan={4}>
                  <span className="reports__empty-icon" aria-hidden="true">
                    ↗
                  </span>
                  <span>No team performance data to display yet.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Report history placeholder */}
      <section
        className="reports__panel reports__history"
        aria-labelledby="report-history-heading"
      >
        <div className="reports__history-icon" aria-hidden="true">
          ◷
        </div>
        <div>
          <h2 id="report-history-heading">Report History</h2>
          <p>
            Previously generated reports may appear here if saved report history
            becomes part of the final requirements.
          </p>
        </div>
        <span className="reports__coming-soon">Coming later</span>
      </section>
    </section>
  );
}

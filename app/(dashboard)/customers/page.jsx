import "../../styles/customers.css";

export default function CustomersPage() {
  return (
    <section className="customers" aria-labelledby="customers-heading">
      {/* Page header */}
      <header className="customers__header">
        <div className="customers__header-content">
          <span className="customers__eyebrow">CUSTOMER RELATIONSHIPS</span>
          <h1 className="customers__title" id="customers-heading">
            Customer Management
          </h1>
          <p className="customers__description">
            Manage customer information, review relationships, and keep
            important customer records organized.
          </p>
        </div>

        <button className="customers__primary-button" type="button">
          <span aria-hidden="true">＋</span> Add Customer
        </button>
      </header>

      {/* Customer overview */}
      <section
        className="customers__section"
        aria-labelledby="customer-overview-heading"
      >
        <div className="customers__section-heading">
          <div>
            <h2 id="customer-overview-heading">Customer Overview</h2>
            <p>A snapshot of your customer relationships.</p>
          </div>
        </div>

        <dl className="customers__metrics">
          <div className="customers__metric customers__metric--total">
            <span className="customers__metric-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <circle
                  cx="10"
                  cy="7.5"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M16 4.5a3.5 3.5 0 0 1 0 6.8M17 15h1.5a3.5 3.5 0 0 1 3.5 3.5V20"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <dt>Total Customers</dt>
            <dd>—</dd>
            <p>All customer records</p>
          </div>

          <div className="customers__metric customers__metric--new">
            <span className="customers__metric-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle
                  cx="9"
                  cy="8"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M3 20v-1.5A3.5 3.5 0 0 1 6.5 15h5A3.5 3.5 0 0 1 15 18.5V20M19 8v6M16 11h6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <dt>New Customers</dt>
            <dd>—</dd>
            <p>Recently added records</p>
          </div>

          <div className="customers__metric customers__metric--active">
            <span className="customers__metric-icon" aria-hidden="true">
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
            <dt>Active Customers</dt>
            <dd>—</dd>
            <p>Currently active relationships</p>
          </div>

          <div className="customers__metric customers__metric--inactive">
            <span className="customers__metric-icon" aria-hidden="true">
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
            <dt>Customers Without Recent Activity</dt>
            <dd>—</dd>
            <p>Relationships to review</p>
          </div>
        </dl>
      </section>

      {/* Search and filters */}
      <section
        className="customers__panel customers__filters-panel"
        aria-labelledby="customer-filters-heading"
      >
        <div className="customers__section-heading">
          <div>
            <h2 id="customer-filters-heading">Find Customers</h2>
            <p>Search and narrow down your customer records.</p>
          </div>
        </div>

        <form className="customers__filters">
          <div className="customers__field customers__field--search">
            <label htmlFor="customer-search">Search Customers</label>
            <input
              id="customer-search"
              name="search"
              type="search"
              placeholder="Search by name, company, or email"
            />
          </div>

          <div className="customers__field">
            <label htmlFor="customer-status">Customer Status</label>
            <select id="customer-status" name="status" defaultValue="all">
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="customers__field">
            <label htmlFor="customer-owner">Assigned To</label>
            <select id="customer-owner" name="assignedTo" defaultValue="all">
              <option value="all">All Team Members</option>
            </select>
          </div>

          <button className="customers__secondary-button" type="submit">
            Apply Filters
          </button>
        </form>
      </section>

      {/* Customer table */}
      <section
        className="customers__panel customers__table-panel"
        aria-labelledby="customer-list-heading"
      >
        <div className="customers__section-heading">
          <div>
            <h2 id="customer-list-heading">All Customers</h2>
            <p>View customer records and their assigned team members.</p>
          </div>
          <span className="customers__count-label">— customers</span>
        </div>

        <div className="customers__table-wrapper">
          <table className="customers__table">
            <thead>
              <tr>
                <th scope="col">Customer Name</th>
                <th scope="col">Company</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Assigned To</th>
                <th scope="col">Customer Status</th>
                <th scope="col">Date Added</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="customers__empty-cell" colSpan={8}>
                  <span className="customers__empty-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="10"
                        cy="7.5"
                        r="3.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="M19 8v6M16 11h6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <strong>No customers yet</strong>
                  <span>
                    Customer records will appear here when they are added.
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Customer details */}
      <section
        className="customers__panel customers__details-panel"
        aria-labelledby="customer-details-heading"
      >
        <div className="customers__section-heading">
          <div>
            <h2 id="customer-details-heading">Customer Details</h2>
            <p>Contact information for the selected customer.</p>
          </div>
          <span className="customers__selection-label">
            No customer selected
          </span>
        </div>

        <dl className="customers__details-grid">
          <div className="customers__detail-item">
            <dt>Full Name</dt>
            <dd>—</dd>
          </div>

          <div className="customers__detail-item">
            <dt>Company</dt>
            <dd>—</dd>
          </div>

          <div className="customers__detail-item">
            <dt>Email Address</dt>
            <dd>—</dd>
          </div>

          <div className="customers__detail-item">
            <dt>Phone Number</dt>
            <dd>—</dd>
          </div>

          <div className="customers__detail-item">
            <dt>Customer Since</dt>
            <dd>—</dd>
          </div>
        </dl>
      </section>

      {/* Related customer records */}
      <section
        className="customers__section"
        aria-labelledby="customer-relationships-heading"
      >
        <div className="customers__section-heading">
          <div>
            <h2 id="customer-relationships-heading">Related Records</h2>
            <p>Keep sales opportunities and customer activities connected.</p>
          </div>
        </div>

        <div className="customers__related-grid">
          <article className="customers__panel customers__related-card">
            <div className="customers__related-icon customers__related-icon--deals">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="3.5"
                  y="7"
                  width="17"
                  height="13"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3.5 12h17M10 12v2h4v-2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="customers__related-content">
              <h3 id="customer-deals-heading">Deals</h3>
              <p>View sales opportunities associated with this customer.</p>
              <span className="customers__related-empty">
                No related deals yet
              </span>
            </div>
          </article>

          <article className="customers__panel customers__related-card">
            <div className="customers__related-icon customers__related-icon--activities">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="17"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M8 9h8M8 13h8M8 17h4M8 2.5v3M16 2.5v3"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="customers__related-content">
              <h3 id="customer-activities-heading">Activities</h3>
              <p>
                Review calls, emails, meetings, and tasks associated with this
                customer.
              </p>
              <span className="customers__related-empty">
                No related activities yet
              </span>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}

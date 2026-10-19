import "../../styles/dashboard.css";

import Link from "next/link";
export default function DashboardPage() {
  return (
    <main className="dashboard">
      {/* Page heading */}
      <header className="dashboard__header">
        <div>
          <p className="dashboard__eyebrow">WORKSPACE SUMMARY</p>
          <h1>Dashboard Overview</h1>
          <p className="dashboard__subtitle">
            Get an overview of your company's customer relationships and sales
            activities.
          </p>
        </div>
      </header>

      {/* Business Overview: key CRM statistics */}
      <section
        className="dashboard__overview"
        aria-labelledby="overview-heading"
      >
        <div className="dashboard__section-heading">
          <div>
            <h2 id="overview-heading">Business Overview</h2>
            <p>Your workspace at a glance.</p>
          </div>
        </div>

        <div className="dashboard__overview-grid">
          <article className="dashboard__stat-card dashboard__stat-card--customers">
            <div className="dashboard__stat-top">
              <span className="dashboard__stat-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="10" cy="7" r="4" />
                  <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <span className="dashboard__stat-label">Customers</span>
            </div>

            <p className="dashboard__stat-value">0</p>
            <p className="dashboard__stat-description">
              Customers in your workspace
            </p>
          </article>

          <article className="dashboard__stat-card dashboard__stat-card--leads">
            <div className="dashboard__stat-top">
              <span className="dashboard__stat-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M5 21v-2a7 7 0 0 1 14 0v2M19 8h3m-1.5-1.5v3" />
                </svg>
              </span>
              <span className="dashboard__stat-label">Active Leads</span>
            </div>

            <p className="dashboard__stat-value">0</p>
            <p className="dashboard__stat-description">
              Potential customers being tracked
            </p>
          </article>

          <article className="dashboard__stat-card dashboard__stat-card--deals">
            <div className="dashboard__stat-top">
              <span className="dashboard__stat-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="7" width="18" height="14" rx="2" />
                  <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
                </svg>
              </span>
              <span className="dashboard__stat-label">Open Deals</span>
            </div>

            <p className="dashboard__stat-value">0</p>
            <p className="dashboard__stat-description">
              Deals currently in progress
            </p>
          </article>

          <article className="dashboard__stat-card dashboard__stat-card--activities">
            <div className="dashboard__stat-top">
              <span className="dashboard__stat-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <span className="dashboard__stat-label">Sales Activities</span>
            </div>

            <p className="dashboard__stat-value">0</p>
            <p className="dashboard__stat-description">
              Activities recorded in your workspace
            </p>
          </article>
        </div>
      </section>

      {/* AI Assistant: quick access to insights and automation */}
      <section className="dashboard__ai" aria-labelledby="dashboard-ai-heading">
        <div className="dashboard__ai-content">
          <span className="dashboard__ai-label">
            <span aria-hidden="true">✦</span>
            AI SALES ASSISTANT
          </span>

          <h2 id="dashboard-ai-heading">Work smarter with your sales AI.</h2>

          <p>
            Explore tools designed to help qualify leads, prioritize follow-ups,
            and understand your sales activity from one workspace.
          </p>

          <Link href="/ai-automation" className="dashboard__ai-button">
            Explore AI workspace
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="dashboard__ai-preview">
          <span className="dashboard__ai-preview-icon" aria-hidden="true">
            ✦
          </span>

          <div>
            <strong>Your AI insights</strong>
            <p>
              Lead insights and follow-up recommendations will appear here when
              AI processing is connected.
            </p>

            <span className="dashboard__ai-status">Ready for setup</span>
          </div>
        </div>
      </section>

      {/* Main dashboard row: performance gets more horizontal space */}
      <div className="dashboard__performance-grid">
        <section className="dashboard__section" aria-labelledby="sales-heading">
          <div className="dashboard__section-heading">
            <div>
              <h2 id="sales-heading">Sales Performance</h2>
              <p>Track your team's sales progress.</p>
            </div>
          </div>

          <div className="dashboard__panel dashboard__panel--main">
            <div className="dashboard__empty-state">
              <span className="dashboard__empty-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="m7 14 4-4 4 3 5-7" />
                </svg>
              </span>
              <p>Sales performance data will appear here.</p>
            </div>
          </div>
        </section>

        <section
          className="dashboard__section"
          aria-labelledby="activities-heading"
        >
          <div className="dashboard__section-heading">
            <div>
              <h2 id="activities-heading">Recent Activities</h2>
              <p>See what's happening in your workspace.</p>
            </div>
          </div>

          <div className="dashboard__panel dashboard__panel--main">
            <div className="dashboard__empty-state">
              <span className="dashboard__empty-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <p>No activities to display yet.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom dashboard row: two equal-width panels */}
      <div className="dashboard__bottom-grid">
        <section className="dashboard__section" aria-labelledby="tasks-heading">
          <div className="dashboard__section-heading">
            <div>
              <h2 id="tasks-heading">Upcoming Tasks</h2>
              <p>Stay on top of your next actions.</p>
            </div>
          </div>

          <div className="dashboard__panel dashboard__panel--bottom">
            <div className="dashboard__empty-state">
              <span className="dashboard__empty-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 10h18M9 15l2 2 4-4" />
                </svg>
              </span>
              <p>No upcoming tasks to display yet.</p>
            </div>
          </div>
        </section>

        <section
          className="dashboard__section"
          aria-labelledby="followups-heading"
        >
          <div className="dashboard__section-heading">
            <div>
              <h2 id="followups-heading">Upcoming Follow-ups</h2>
              <p>Keep conversations moving forward.</p>
            </div>
          </div>

          <div className="dashboard__panel dashboard__panel--bottom">
            <div className="dashboard__empty-state">
              <span className="dashboard__empty-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
                </svg>
              </span>
              <p>No upcoming follow-ups to display yet.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

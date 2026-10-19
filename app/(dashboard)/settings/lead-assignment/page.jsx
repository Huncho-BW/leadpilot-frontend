import Link from "next/link";
import "../../../styles/lead-assignment-settings.css";

export default function LeadAssignmentSettingsPage() {
  return (
    <main className="assignment-page">
      {/* Breadcrumb navigation */}
      <nav className="assignment-page__breadcrumb" aria-label="Breadcrumb">
        <Link href="/settings">Settings</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Lead Assignment</span>
      </nav>

      {/* Page introduction */}
      <header className="assignment-page__header">
        <span className="assignment-page__eyebrow">
          WORKSPACE CONFIGURATION
        </span>

        <h1 id="lead-assignment-heading">Lead Assignment</h1>

        <p>
          Configure how new leads are distributed among eligible members of your
          company workspace.
        </p>
      </header>

      {/* Assignment strategy selection */}
      <section
        className="assignment-section"
        aria-labelledby="assignment-strategy-heading"
      >
        <div className="assignment-section__heading">
          <div>
            <h2 id="assignment-strategy-heading">Assignment Strategy</h2>
            <p>Choose how new leads should be distributed.</p>
          </div>
          <span className="assignment-badge">Configuration</span>
        </div>

        <form className="assignment-form">
          <fieldset className="assignment-fieldset">
            <legend className="assignment-fieldset__legend">
              Select an assignment method
            </legend>

            <div className="assignment-strategy-grid">
              <label className="assignment-strategy">
                <input
                  type="radio"
                  name="assignment-strategy"
                  value="random"
                  defaultChecked
                />

                <span className="assignment-strategy__body">
                  <span className="assignment-strategy__top">
                    <span
                      className="assignment-strategy__icon"
                      aria-hidden="true"
                    >
                      ⤨
                    </span>
                    <span
                      className="assignment-strategy__radio"
                      aria-hidden="true"
                    />
                  </span>

                  <strong>Random Pick</strong>

                  <span className="assignment-strategy__description">
                    Assign each new lead to a randomly selected eligible and
                    available team member.
                  </span>

                  <span className="assignment-strategy__tag">
                    Default strategy
                  </span>
                </span>
              </label>

              <label className="assignment-strategy">
                <input
                  type="radio"
                  name="assignment-strategy"
                  value="round-robin"
                />

                <span className="assignment-strategy__body">
                  <span className="assignment-strategy__top">
                    <span
                      className="assignment-strategy__icon"
                      aria-hidden="true"
                    >
                      ↻
                    </span>
                    <span
                      className="assignment-strategy__radio"
                      aria-hidden="true"
                    />
                  </span>

                  <strong>Round-robin</strong>

                  <span className="assignment-strategy__description">
                    Distribute leads among eligible team members in a repeating
                    turn-based order.
                  </span>

                  <span className="assignment-strategy__tag assignment-strategy__tag--muted">
                    Even distribution
                  </span>
                </span>
              </label>

              <label className="assignment-strategy">
                <input type="radio" name="assignment-strategy" value="manual" />

                <span className="assignment-strategy__body">
                  <span className="assignment-strategy__top">
                    <span
                      className="assignment-strategy__icon"
                      aria-hidden="true"
                    >
                      ☷
                    </span>
                    <span
                      className="assignment-strategy__radio"
                      aria-hidden="true"
                    />
                  </span>

                  <strong>Manual Assignment</strong>

                  <span className="assignment-strategy__description">
                    Let an authorized team member choose who receives each lead.
                  </span>

                  <span className="assignment-strategy__tag assignment-strategy__tag--muted">
                    Choose an owner
                  </span>
                </span>
              </label>
            </div>
          </fieldset>

          <div className="assignment-form__footer">
            <p>
              Changes will take effect once assignment settings are connected to
              the backend.
            </p>

            <button
              className="assignment-button"
              type="button"
              disabled
              title="Saving will be enabled when the backend is connected"
            >
              Save Assignment Settings
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </section>

      {/* Eligible workspace roles */}
      <section
        className="assignment-section"
        aria-labelledby="eligible-members-heading"
      >
        <div className="assignment-section__heading">
          <div>
            <h2 id="eligible-members-heading">Eligible Team Members</h2>
            <p>
              Choose which team roles can receive automatically assigned leads.
            </p>
          </div>
        </div>

        <fieldset className="assignment-roles">
          <legend className="assignment-roles__legend">Eligible roles</legend>

          <label className="assignment-role">
            <span className="assignment-role__icon" aria-hidden="true">
              ♙
            </span>

            <span className="assignment-role__content">
              <strong>Salespeople</strong>
              <span>Receive and manage assigned leads.</span>
            </span>

            <input
              type="checkbox"
              name="eligible-roles"
              value="salesperson"
              defaultChecked
            />
          </label>

          <label className="assignment-role">
            <span
              className="assignment-role__icon assignment-role__icon--manager"
              aria-hidden="true"
            >
              ♧
            </span>

            <span className="assignment-role__content">
              <strong>Managers</strong>
              <span>Allow managers to receive assigned leads too.</span>
            </span>

            <input type="checkbox" name="eligible-roles" value="manager" />
          </label>
        </fieldset>
      </section>

      {/* Future assignment safeguards */}
      <section
        className="assignment-section"
        aria-labelledby="assignment-rules-heading"
      >
        <div className="assignment-section__heading">
          <div>
            <h2 id="assignment-rules-heading">Additional Rules</h2>
            <p>More controls can be added as assignment requirements evolve.</p>
          </div>
          <span className="assignment-coming-soon">Coming later</span>
        </div>

        <div className="assignment-info-card">
          <span className="assignment-info-card__icon" aria-hidden="true">
            ⚙
          </span>

          <div>
            <h3>Assignment safeguards</h3>
            <p>
              Future options may cover member availability, workload limits, and
              what happens when no eligible team member is available.
            </p>
          </div>
        </div>
      </section>

      {/* Summary of the planned assignment configuration */}
      <section
        className="assignment-section"
        aria-labelledby="assignment-summary-heading"
      >
        <div className="assignment-section__heading">
          <div>
            <h2 id="assignment-summary-heading">Assignment Summary</h2>
            <p>
              An overview of the configuration currently planned for this
              workspace.
            </p>
          </div>
        </div>

        <div className="assignment-summary">
          <div className="assignment-summary__item">
            <span>Default strategy</span>
            <strong>
              <span className="assignment-summary__dot" aria-hidden="true" />
              Random Pick
            </strong>
          </div>

          <div className="assignment-summary__item">
            <span>Default eligible role</span>
            <strong>Salespeople</strong>
          </div>

          <div className="assignment-summary__item">
            <span>Configuration status</span>
            <strong className="assignment-summary__pending">
              Not connected
            </strong>
          </div>

          <p className="assignment-summary__notice">
            This summary shows planned defaults, not saved workspace settings.
            The actual configuration will be loaded from the backend when
            integration is implemented.
          </p>
        </div>
      </section>
    </main>
  );
}

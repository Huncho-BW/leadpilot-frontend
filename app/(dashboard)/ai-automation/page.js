import Link from "next/link";
import "../../styles/ai-automation.css";

const aiTools = [
  {
    number: "01",
    icon: "◎",
    title: "Lead qualification",
    description:
      "Help your sales team identify promising leads and understand which enquiries need attention.",
    status: "Planned",
  },
  {
    number: "02",
    icon: "↗",
    title: "Follow-up assistant",
    description:
      "Prepare follow-up suggestions and help prioritize leads that may need a response.",
    status: "Planned",
  },
  {
    number: "03",
    icon: "▥",
    title: "Sales insights",
    description:
      "Understand lead activity, pipeline movement, and potential areas for improvement.",
    status: "Planned",
  },
  {
    number: "04",
    icon: "✦",
    title: "Workflow automation",
    description:
      "Plan repetitive CRM workflows that could later run automatically when configured.",
    status: "Planned",
  },
];

export default function AIAutomationPage() {
  return (
    <div className="ai-workspace">
      <header className="ai-workspace__heading">
        <div>
          <div className="ai-workspace__eyebrow">
            <span aria-hidden="true">✦</span> INTELLIGENCE CENTER
          </div>

          <h1>AI Automation</h1>

          <p>
            Explore tools designed to help your team qualify leads, manage
            follow-ups, and work more efficiently.
          </p>
        </div>

        <Link href="/dashboard" className="ai-workspace__back-link">
          <span aria-hidden="true">←</span> Back to dashboard
        </Link>
      </header>

      <section className="ai-workspace__hero">
        <div className="ai-workspace__hero-copy">
          <span className="ai-workspace__hero-tag">
            YOUR SALES WORKSPACE, ENHANCED
          </span>

          <h2>Spend less time managing tasks. Focus on better leads.</h2>

          <p>
            The AI workspace is where future CRM intelligence and automation
            tools will live. Connect the required services when these features
            are ready to be configured.
          </p>

          <a href="#ai-tools" className="ai-workspace__primary-button">
            Explore AI tools <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="ai-workspace__hero-visual" aria-hidden="true">
          <div className="ai-orbit ai-orbit--outer" />
          <div className="ai-orbit ai-orbit--inner" />

          <div className="ai-orbit__core">
            <span>✦</span>
          </div>

          <div className="ai-orbit__node ai-orbit__node--top">◎</div>
          <div className="ai-orbit__node ai-orbit__node--left">↗</div>
          <div className="ai-orbit__node ai-orbit__node--right">✧</div>
        </div>
      </section>

      <section className="ai-workspace__summary" aria-label="AI service status">
        <article className="ai-summary-card">
          <span className="ai-summary-card__label">AI service</span>
          <strong>Not connected</strong>
          <span className="ai-summary-card__note">Ready for future setup</span>
        </article>

        <article className="ai-summary-card">
          <span className="ai-summary-card__label">AI tools</span>
          <strong>4</strong>
          <span className="ai-summary-card__note">
            Planned for this workspace
          </span>
        </article>

        <article className="ai-summary-card">
          <span className="ai-summary-card__label">Automations running</span>
          <strong>0</strong>
          <span className="ai-summary-card__note">
            No active automations yet
          </span>
        </article>
      </section>

      <section className="ai-workspace__tools" id="ai-tools">
        <div className="ai-workspace__section-heading">
          <div>
            <h2>AI tools</h2>
            <p>Potential capabilities for your CRM workflow.</p>
          </div>

          <span className="ai-workspace__section-count">04 TOOLS</span>
        </div>

        <div className="ai-tool-grid">
          {aiTools.map((tool) => (
            <article className="ai-tool-card" key={tool.number}>
              <div className="ai-tool-card__top">
                <span className="ai-tool-card__icon" aria-hidden="true">
                  {tool.icon}
                </span>
                <span className="ai-tool-card__number">{tool.number}</span>
              </div>

              <h3>{tool.title}</h3>
              <p>{tool.description}</p>

              <div className="ai-tool-card__bottom">
                <span className="ai-tool-card__status">
                  <span aria-hidden="true" />
                  {tool.status}
                </span>
                <span className="ai-tool-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-workspace__automation">
        <div className="ai-workspace__automation-icon" aria-hidden="true">
          ✦
        </div>

        <div>
          <h2>Your automation center</h2>
          <p>
            When automation is implemented, you will be able to configure
            supported workflows and review their status here.
          </p>
        </div>

        <span className="ai-workspace__coming-soon">Coming later</span>
      </section>
    </div>
  );
}

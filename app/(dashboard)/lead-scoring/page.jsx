export default function LeadScoringPage() {
  return (
    <section aria-labelledby="lead-scoring-heading">
      {/* Page header: introduces lead scoring and reserves space
          for future actions related to scoring configuration. */}
      <header>
        <h1 id="lead-scoring-heading">Lead Scoring</h1>
        <p>
          Review lead scores to help your team identify and prioritize promising
          potential customers.
        </p>

        {/* TODO: Add scoring configuration actions when we reach
            the relevant settings and business-logic stages. */}
        <button type="button">Scoring Criteria</button>
      </header>

      {/* Overview: these summary values will eventually be
          calculated from leads in the current workspace. */}
      <section aria-labelledby="scoring-overview-heading">
        <h2 id="scoring-overview-heading">Scoring Overview</h2>

        <dl>
          <div>
            <dt>Total Scored Leads</dt>
            <dd>—</dd>
          </div>

          <div>
            <dt>High-Scoring Leads</dt>
            <dd>—</dd>
          </div>

          <div>
            <dt>Medium-Scoring Leads</dt>
            <dd>—</dd>
          </div>

          <div>
            <dt>Low-Scoring Leads</dt>
            <dd>—</dd>
          </div>
        </dl>
      </section>

      {/* Scoring criteria overview: describes the factors that
          may contribute to a score. Exact criteria and weights
          will be decided before implementing scoring calculations. */}
      <section aria-labelledby="scoring-criteria-heading">
        <h2 id="scoring-criteria-heading">Scoring Criteria</h2>
        <p>
          Lead scores will be based on agreed criteria that help evaluate a
          lead's potential and level of engagement.
        </p>

        <ul>
          <li>
            <h3>Contact Information</h3>
            <p>
              Represents the availability and completeness of the lead's contact
              details.
            </p>
          </li>

          <li>
            <h3>Engagement</h3>
            <p>
              Represents recorded interactions between the lead and the sales
              team.
            </p>
          </li>

          <li>
            <h3>Qualification</h3>
            <p>
              Represents how well the lead matches the company's agreed
              qualification requirements.
            </p>
          </li>
        </ul>

        {/* These are proposed categories, not finalized scoring
            rules. We will confirm the criteria and weights before
            adding real calculations or automatic score updates. */}
      </section>

      {/* Lead scoring list: each row will eventually show the
          score and category associated with a specific lead. */}
      <section aria-labelledby="scored-leads-heading">
        <h2 id="scored-leads-heading">Scored Leads</h2>

        {/* Search and filter controls are structural only.
            They will be connected to the lead data later. */}
        <form>
          <div>
            <label htmlFor="scoring-search">Search Leads</label>
            <input
              id="scoring-search"
              name="search"
              type="search"
              placeholder="Search by lead name or company"
            />
          </div>

          <div>
            <label htmlFor="score-category">Score Category</label>
            <select id="score-category" name="scoreCategory">
              <option value="all">All Categories</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              <option value="unscored">Not Scored</option>
            </select>
          </div>

          {/* TODO: Connect search and category filtering to
              the workspace's lead records. */}
          <button type="submit">Apply Filters</button>
        </form>

        <table>
          <thead>
            <tr>
              <th scope="col">Lead Name</th>
              <th scope="col">Company</th>
              <th scope="col">Lead Status</th>
              <th scope="col">Score</th>
              <th scope="col">Score Category</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* Lead records will be rendered here after API
                integration. */}
            <tr>
              <td colSpan={7}>No lead scores to display yet.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Score explanation: later, users can inspect the factors
          behind a lead's score instead of seeing only a number. */}
      <section aria-labelledby="score-explanation-heading">
        <h2 id="score-explanation-heading">Understanding Lead Scores</h2>

        <p>
          A lead's score will summarize how closely it matches the agreed
          scoring criteria. The score categories and their ranges will be
          defined before implementation.
        </p>

        {/* TODO: Display the selected lead's score breakdown,
            contributing factors, and relevant activity history. */}
      </section>
    </section>
  );
}

export default function IntegrationsPage() {
  return (
    <section aria-labelledby="integrations-heading">
      {/* Introduces the page and explains what integrations are for. */}
      <header>
        <h1 id="integrations-heading">Integrations</h1>
        <p>
          Connect external services to your CRM to exchange data and improve
          your team's workflow.
        </p>
      </header>

      {/* Shows a quick overview of the workspace's integration status.
          These values will come from the backend in a later stage. */}
      <section aria-labelledby="integration-overview-heading">
        <h2 id="integration-overview-heading">Integration Overview</h2>

        <dl>
          <div>
            <dt>Available Integrations</dt>
            <dd>—</dd>
          </div>

          <div>
            <dt>Connected Integrations</dt>
            <dd>—</dd>
          </div>

          <div>
            <dt>Integrations Requiring Attention</dt>
            <dd>—</dd>
          </div>
        </dl>
      </section>

      {/* Lists potential external services.
          The actual supported providers will be decided before integration
          logic and provider authorization are implemented. */}
      <section aria-labelledby="available-integrations-heading">
        <h2 id="available-integrations-heading">Available Integrations</h2>

        <p>Explore services that could connect with your CRM.</p>

        <ul>
          <li>
            <article>
              <h3>Google Calendar</h3>
              <p>Potentially synchronize CRM meetings and calendar events.</p>
              {/* TODO: Add the connection flow after choosing a provider
                  and implementing backend authorization. */}
              <button type="button">Connect</button>
            </article>
          </li>

          <li>
            <article>
              <h3>Gmail</h3>
              <p>
                Potentially send emails and record communication history from
                the CRM.
              </p>
              {/* TODO: Connect through a secure backend authorization flow. */}
              <button type="button">Connect</button>
            </article>
          </li>

          <li>
            <article>
              <h3>Google Sheets</h3>
              <p>Potentially export or synchronize selected CRM records.</p>
              {/* TODO: Define which records can be exported or synchronized. */}
              <button type="button">Connect</button>
            </article>
          </li>
        </ul>
      </section>

      {/* Displays services already connected to the current workspace.
          Each workspace must only see and manage its own connections. */}
      <section aria-labelledby="connected-integrations-heading">
        <h2 id="connected-integrations-heading">Connected Integrations</h2>

        <p>No connected integrations to display yet.</p>

        {/* TODO: Display provider name, connection status, connected
            account and available management actions. */}
      </section>

      {/* Keeps synchronization information separate from provider setup.
          Not every integration will necessarily support automatic syncing. */}
      <section aria-labelledby="integration-activity-heading">
        <h2 id="integration-activity-heading">Synchronization and Activity</h2>

        <p>
          Integration activity and synchronization details will appear here.
        </p>

        {/* TODO: Display supported sync history, last sync time,
            errors and other relevant provider activity. */}
      </section>

      {/* Provides a dedicated area for managing existing connections. */}
      <section aria-labelledby="integration-management-heading">
        <h2 id="integration-management-heading">Integration Management</h2>

        <p>Manage the connections configured for your workspace.</p>

        {/* TODO: Add configure, reconnect and disconnect actions
            when the corresponding integration functionality exists. */}
      </section>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/onboarding.css";

const channels = [
  {
    name: "Instagram",
    description: "Manage enquiries from your Instagram business presence.",
    initials: "IG",
    className: "instagram",
  },
  {
    name: "TikTok",
    description: "Organize potential customers discovering products on TikTok.",
    initials: "TT",
    className: "tiktok",
  },
  {
    name: "WhatsApp Business",
    description: "Keep customer conversations and enquiries organized.",
    initials: "WA",
    className: "whatsapp",
  },
  {
    name: "Facebook",
    description: "Organize eligible enquiries from Facebook.",
    initials: "f",
    className: "facebook",
  },
  {
    name: "X",
    description: "Keep track of relevant enquiries from X where supported.",
    initials: "X",
    className: "x-twitter",
  },
];

export default function ConnectChannelsPage() {
  const router = useRouter();

  // Demo-only state: this does not authorize a real social account.
  const [connectedChannels, setConnectedChannels] = useState([]);

  // Simulate connecting a channel so we can test the UI.
  function handleConnect(channelName) {
    if (channelName === "Instagram") {
      window.location.href =
        "https://leadpilot-backend-mbx0.onrender.com/api/v1/auth/instagram";
      return;
    }

    // Keep demo behavior for the other channels.
    setConnectedChannels((current) =>
      current.includes(channelName) ? current : [...current, channelName],
    );
  }

  // Continue and Skip both lead to the existing dashboard.
  function goToDashboard() {
    router.push("/dashboard");
  }

  return (
    <main className="onboarding-page">
      <section className="onboarding-container">
        <header className="onboarding-header">
          <div className="onboarding-brand">
            <span className="brand-mark">C</span>
            <span>CRM Workspace</span>
          </div>

          <span className="step-label">STEP 1 OF 3</span>
        </header>

        <div
          className="progress-track"
          role="progressbar"
          aria-label="Onboarding progress"
          aria-valuemin={0}
          aria-valuemax={3}
          aria-valuenow={1}
        >
          <div className="progress-fill" />
        </div>

        <section className="onboarding-intro">
          <span className="eyebrow">LET'S SET UP YOUR WORKSPACE</span>

          <h1>Bring your customer enquiries together.</h1>

          <p>
            Choose the social channels your business uses. You can skip this
            step and connect accounts later in Settings.
          </p>
        </section>

        <section className="channels-section">
          <div className="section-heading">
            <div>
              <h2>Connect your channels</h2>
              <p>Select the platforms that matter to your business.</p>
            </div>

            <span className="optional-label">Optional</span>
          </div>

          <div className="channels-grid">
            {channels.map((channel) => {
              const isConnected = connectedChannels.includes(channel.name);

              return (
                <article className="channel-card" key={channel.name}>
                  <div className="channel-card-top">
                    <span
                      className={`channel-icon ${channel.className}`}
                      aria-hidden="true"
                    >
                      {channel.initials}
                    </span>

                    <span
                      className={`channel-status ${
                        isConnected ? "is-connected" : ""
                      }`}
                    >
                      <span className="status-dot" />
                      {isConnected ? "Demo connected" : "Not connected"}
                    </span>
                  </div>

                  <h3>{channel.name}</h3>

                  <p className="channel-description">{channel.description}</p>

                  <button
                    className={`channel-button ${
                      isConnected ? "channel-button-connected" : ""
                    }`}
                    type="button"
                    onClick={() => handleConnect(channel.name)}
                    disabled={isConnected}
                  >
                    {isConnected ? "Connected for demo ✓" : "Connect account"}
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <aside className="onboarding-notice">
          <span className="notice-icon" aria-hidden="true">
            i
          </span>

          <p>
            <strong>Account access and privacy</strong>
            <span>
              Real connections require authorization through each platform.
              These demo buttons only change the screen; they do not access
              accounts or retrieve leads.
            </span>
          </p>
        </aside>

        <footer className="onboarding-footer">
          <p>
            {connectedChannels.length > 0
              ? `${connectedChannels.length} demo ${
                  connectedChannels.length === 1 ? "channel" : "channels"
                } selected.`
              : "You can connect or manage channels later in Settings."}
          </p>

          <div className="onboarding-actions">
            <button
              className="skip-button"
              type="button"
              onClick={goToDashboard}
            >
              Skip for now
            </button>

            <button
              className="primary-button"
              type="button"
              onClick={goToDashboard}
            >
              Continue to dashboard
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}

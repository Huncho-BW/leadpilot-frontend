"use client";

import { useState } from "react";
import Link from "next/link";
import "../../../styles/connected-channels.css";

// Initial channel configuration for the frontend prototype.
// Real authorization and connection status will come from the backend later.
const initialChannels = [
  {
    id: "instagram",
    name: "Instagram",
    category: "Social media",
    icon: "◎",
    color: "instagram",
    description:
      "Prepare to capture eligible enquiries and leads from supported Instagram business integrations.",
    capabilities: ["Business accounts", "Lead capture"],
  },
  {
    id: "tiktok",
    name: "TikTok",
    category: "Social media",
    icon: "♪",
    color: "tiktok",
    description:
      "Prepare your workspace for supported TikTok business and lead-generation integrations.",
    capabilities: ["Business accounts", "Lead capture"],
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    category: "Messaging",
    icon: "◉",
    color: "whatsapp",
    description:
      "Prepare to manage eligible customer enquiries through a supported WhatsApp Business integration.",
    capabilities: ["Customer enquiries", "Messaging"],
  },
  {
    id: "facebook",
    name: "Facebook",
    category: "Social media",
    icon: "f",
    color: "facebook",
    description:
      "Prepare to capture eligible leads through supported Facebook Pages and lead-generation integrations.",
    capabilities: ["Pages", "Lead capture"],
  },
  {
    id: "x",
    name: "X",
    category: "Social media",
    icon: "𝕏",
    color: "x",
    description:
      "Prepare for supported X integrations and eligible customer enquiry workflows.",
    capabilities: ["Business presence", "Enquiries"],
  },
];

export default function ConnectedChannelsPage() {
  const [channels, setChannels] = useState(initialChannels);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [notice, setNotice] = useState("");

  // Open a setup dialog instead of pretending OAuth has completed.
  function handleConnect(channel) {
    setSelectedChannel(channel);
    setNotice("");
  }

  function closeDialog() {
    setSelectedChannel(null);
    setNotice("");
  }

  // This confirms that the user understands this is a frontend prototype.
  // It deliberately does not mark the social account as connected.
  function handleDemoContinue() {
    setNotice(
      `The ${selectedChannel.name} connection flow is not configured yet. Real account authorization will be added with the platform API integration.`,
    );
  }

  const connectedCount = channels.filter(
    (channel) => channel.status === "connected",
  ).length;

  return (
    <div className="connected-channels">
      <header className="connected-channels__header">
        <div>
          <Link href="/settings" className="connected-channels__back-link">
            <span aria-hidden="true">←</span> Settings
          </Link>

          <p className="connected-channels__eyebrow">WORKSPACE INTEGRATIONS</p>

          <h1>Connected Channels</h1>

          <p className="connected-channels__intro">
            Manage your social channels and prepare your workspace to capture
            leads from the platforms where your customers discover your
            products.
          </p>
        </div>

        <div className="connected-channels__summary">
          <span className="connected-channels__summary-icon" aria-hidden="true">
            ↗
          </span>
          <div>
            <strong>
              {connectedCount} of {channels.length}
            </strong>
            <span>Channels connected</span>
          </div>
        </div>
      </header>

      <section
        className="connected-channels__notice"
        aria-label="Setup information"
      >
        <div className="connected-channels__notice-icon" aria-hidden="true">
          <span>i</span>
        </div>

        <div>
          <h2>Bring your customer channels into one workspace</h2>
          <p>
            Connecting a channel will eventually require authorization and the
            appropriate platform permissions. Available lead data and messaging
            features depend on each platform's APIs and your account access.
          </p>
        </div>
      </section>

      <section className="connected-channels__section">
        <div className="connected-channels__section-heading">
          <div>
            <h2>Your channels</h2>
            <p>Choose a platform to view its connection setup.</p>
          </div>

          <span className="connected-channels__count">
            {channels.length} PLATFORMS
          </span>
        </div>

        <div className="connected-channels__grid">
          {channels.map((channel) => {
            const isConnected = channel.status === "connected";

            return (
              <article className="channel-card" key={channel.id}>
                <div className="channel-card__top">
                  <div
                    className={`channel-card__icon channel-card__icon--${channel.color}`}
                    aria-hidden="true"
                  >
                    {channel.icon}
                  </div>

                  <span
                    className={`channel-card__status ${
                      isConnected ? "channel-card__status--connected" : ""
                    }`}
                  >
                    <span aria-hidden="true" />
                    {isConnected ? "Connected" : "Not connected"}
                  </span>
                </div>

                <div className="channel-card__heading">
                  <div>
                    <h3>{channel.name}</h3>
                    <span className="channel-card__category">
                      {channel.category}
                    </span>
                  </div>
                </div>

                <p className="channel-card__description">
                  {channel.description}
                </p>

                <div className="channel-card__capabilities">
                  {channel.capabilities.map((capability) => (
                    <span key={capability}>{capability}</span>
                  ))}
                </div>

                <div className="channel-card__footer">
                  <button
                    type="button"
                    className={
                      isConnected
                        ? "channel-card__button channel-card__button--secondary"
                        : "channel-card__button"
                    }
                    onClick={() => handleConnect(channel)}
                  >
                    {isConnected ? "Manage channel" : "Set up channel"}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="connected-channels__footer-note">
        <div>
          <span className="connected-channels__footer-icon" aria-hidden="true">
            ✦
          </span>
        </div>
        <div>
          <h2>More than just connections</h2>
          <p>
            Once supported integrations are configured, this workspace can
            become the starting point for lead capture, qualification, and
            assignment to your sales team.
          </p>
        </div>
      </section>

      {selectedChannel && (
        <div className="channel-dialog-backdrop" onClick={closeDialog}>
          <section
            className="channel-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="channel-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="channel-dialog__close"
              aria-label="Close dialog"
              onClick={closeDialog}
            >
              ×
            </button>

            <div
              className={`channel-card__icon channel-card__icon--${selectedChannel.color}`}
              aria-hidden="true"
            >
              {selectedChannel.icon}
            </div>

            <p className="channel-dialog__eyebrow">CHANNEL SETUP</p>

            <h2 id="channel-dialog-title">Set up {selectedChannel.name}</h2>

            <p className="channel-dialog__description">
              {selectedChannel.description}
            </p>

            <div className="channel-dialog__steps">
              <div>
                <span>1</span>
                <p>Authorize access to your business account.</p>
              </div>
              <div>
                <span>2</span>
                <p>Review the permissions supported by the integration.</p>
              </div>
              <div>
                <span>3</span>
                <p>Configure which eligible leads should enter your CRM.</p>
              </div>
            </div>

            {notice && (
              <p className="channel-dialog__notice" role="status">
                {notice}
              </p>
            )}

            <button
              type="button"
              className="channel-dialog__primary"
              onClick={handleDemoContinue}
            >
              Continue to setup <span aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              className="channel-dialog__secondary"
              onClick={closeDialog}
            >
              Cancel
            </button>

            <p className="channel-dialog__footnote">
              Demo mode · No account authorization has taken place.
            </p>
          </section>
        </div>
      )}
    </div>
  );
}

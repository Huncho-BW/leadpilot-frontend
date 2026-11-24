
"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "../../styles/onboarding.css";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:4000/api/v1";

const channels = [
  {
    name: "Instagram",
    provider: "INSTAGRAM",
    description: "Manage enquiries from your Instagram business presence.",
    initials: "IG",
    className: "instagram",
    available: true,
  },
  {
    name: "TikTok",
    provider: "TIKTOK",
    description: "Organize potential customers discovering products on TikTok.",
    initials: "TT",
    className: "tiktok",
    available: false,
  },
  {
    name: "WhatsApp Business",
    provider: "WHATSAPP",
    description: "Keep customer conversations and enquiries organized.",
    initials: "WA",
    className: "whatsapp",
    available: false,
  },
  {
    name: "Facebook",
    provider: "FACEBOOK",
    description: "Organize eligible enquiries from Facebook.",
    initials: "f",
    className: "facebook",
    available: false,
  },
  {
    name: "X",
    provider: "X",
    description: "Keep track of relevant enquiries from X where supported.",
    initials: "X",
    className: "x-twitter",
    available: false,
  },
];

const instagramMessages = {
  success: "Your Instagram account has been connected successfully.",
  denied:
    "Instagram authorization was cancelled or declined. You can try again whenever you're ready.",
  failed:
    "Instagram authorization could not be completed. Please try again.",
  session_expired:
    "Your onboarding session has expired. Please sign in again.",
};

function ConnectChannelsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [connections, setConnections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [loadError, setLoadError] = useState("");

  const instagramStatus = searchParams.get("instagram");

  const instagramResult =
    instagramStatus && Object.hasOwn(instagramMessages, instagramStatus)
      ? {
          status: instagramStatus,
          message: instagramMessages[instagramStatus],
        }
      : null;

  // Load saved social account connections.
  useEffect(() => {
    let cancelled = false;

    fetch(`${API_BASE_URL}/integrations`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    })
      .then(async (response) => {
        const result = await response.json().catch(() => null);

        if (!response.ok || !result?.success) {
          throw new Error(
            result?.message || "Unable to load your connected channels.",
          );
        }

        if (!cancelled) {
          setConnections(Array.isArray(result.data) ? result.data : []);
          setLoadError("");
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setLoadError(
            error.message || "Unable to load your connected channels.",
          );
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Remove the Instagram result from the URL after reading it.
  useEffect(() => {
    if (!instagramStatus) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    params.delete("instagram");

    const query = params.toString();

    const cleanUrl = `${window.location.pathname}${
      query ? `?${query}` : ""
    }${window.location.hash}`;

    window.history.replaceState(window.history.state, "", cleanUrl);
  }, [instagramStatus]);

  function getProviderConnections(provider) {
    return connections.filter(
      (connection) =>
        connection.provider === provider &&
        connection.status === "CONNECTED",
    );
  }

  function isProviderConnected(provider) {
    return getProviderConnections(provider).length > 0;
  }

  function handleConnect(channel) {
    if (!channel.available || isConnecting) {
      return;
    }

    if (channel.provider === "INSTAGRAM") {
      setIsConnecting(true);

      const returnTo = encodeURIComponent("/connect-channels");

      const authorizationUrl =
        `${API_BASE_URL}/auth/instagram?returnTo=${returnTo}`;

      window.open(authorizationUrl, "_self");
    }
  }

  function goToDashboard() {
    router.push("/dashboard");
  }

  const connectedCount = channels.filter((channel) =>
    isProviderConnected(channel.provider),
  ).length;

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
          <span className="eyebrow">LET&apos;S SET UP YOUR WORKSPACE</span>

          <h1>Bring your customer enquiries together.</h1>

          <p>
            Choose the social channels your business uses. You can skip this
            step and connect accounts later in Settings.
          </p>
        </section>

        {instagramResult && (
          <aside className="onboarding-notice" role="status" aria-live="polite">
            <span className="notice-icon" aria-hidden="true">
              i
            </span>

            <p>
              <strong>Instagram connection</strong>
              <span>{instagramResult.message}</span>
            </p>
          </aside>
        )}

        {loadError && (
          <aside className="onboarding-notice" role="alert">
            <span className="notice-icon" aria-hidden="true">
              !
            </span>

            <p>
              <strong>Connection status unavailable</strong>
              <span>{loadError}</span>
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
            >
              Try again
            </button>
          </aside>
        )}

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
              const providerConnections = getProviderConnections(
                channel.provider,
              );

              const isConnected = providerConnections.length > 0;

              return (
                <article className="channel-card" key={channel.provider}>
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

                      {isLoading
                        ? "Checking..."
                        : isConnected
                          ? "Connected"
                          : channel.available
                            ? "Not connected"
                            : "Coming soon"}
                    </span>
                  </div>

                  <h3>{channel.name}</h3>

                  <p className="channel-description">
                    {channel.description}
                  </p>

                  {isConnected && (
                    <p className="channel-description">
                      {providerConnections.length} account
                      {providerConnections.length === 1 ? "" : "s"} connected
                      {providerConnections[0].accountName
                        ? ` · ${providerConnections[0].accountName}`
                        : ""}
                    </p>
                  )}

                  <button
                    className={`channel-button ${
                      isConnected ? "channel-button-connected" : ""
                    }`}
                    type="button"
                    onClick={() => handleConnect(channel)}
                    disabled={
                      isLoading ||
                      isConnecting ||
                      isConnected ||
                      !channel.available
                    }
                  >
                    {isLoading
                      ? "Checking status..."
                      : isConnected
                        ? "Connected ✓"
                        : !channel.available
                          ? "Coming soon"
                          : isConnecting
                            ? "Redirecting..."
                            : "Connect account"}
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
              Social accounts are connected through their official
              authorization processes. LeadPilot stores connection credentials
              securely and uses them to support authorized CRM features.
            </span>
          </p>
        </aside>

        <footer className="onboarding-footer">
          <p>
            {isLoading
              ? "Checking your connected channels..."
              : `${connectedCount} ${
                  connectedCount === 1 ? "channel" : "channels"
                } connected.`}
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

export default function ConnectChannelsPage() {
  return (
    <Suspense
      fallback={
        <main className="onboarding-page">
          <section className="onboarding-container">
            <p>Loading your workspace...</p>
          </section>
        </main>
      }
    >
      <ConnectChannelsContent />
    </Suspense>
  );
}

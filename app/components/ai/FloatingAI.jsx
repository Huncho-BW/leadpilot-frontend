"use client";

import { useState } from "react";
import Link from "next/link";

export default function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-ai">
      {isOpen && (
        <section className="floating-ai__panel" aria-label="AI assistant panel">
          <header className="floating-ai__header">
            <div className="floating-ai__identity">
              <span className="floating-ai__sparkle" aria-hidden="true">
                ✦
              </span>

              <div>
                <h2>AI Assistant</h2>
                <p>Your CRM sales companion</p>
              </div>
            </div>

            <button
              type="button"
              className="floating-ai__close"
              aria-label="Close AI assistant"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </header>

          <div className="floating-ai__body">
            <span className="floating-ai__welcome-icon" aria-hidden="true">
              ✦
            </span>

            <h3>How can I help you today?</h3>

            <p>
              Get help with lead qualification, follow-up planning, and sales
              insights once the AI service is connected.
            </p>

            <div className="floating-ai__suggestions">
              <span>Qualify leads</span>
              <span>Plan follow-ups</span>
              <span>Review sales</span>
            </div>
          </div>

          <footer className="floating-ai__footer">
            <Link href="/ai-automation" className="floating-ai__workspace-link">
              Open AI workspace <span aria-hidden="true">→</span>
            </Link>

            <p>AI responses are not connected yet.</p>
          </footer>
        </section>
      )}

      <button
        type="button"
        className="floating-ai__trigger"
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true">{isOpen ? "×" : "✦"}</span>
        {!isOpen && <span>Ask AI</span>}
      </button>
    </div>
  );
}

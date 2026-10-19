"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FloatingAI from "../components/ai/FloatingAI";
import "../styles/dashboard-layout.css";
import "../styles/ai.css";

function DashboardSidebar() {
  const pathname = usePathname();

  // Highlight the current page and its nested routes in the sidebar.
  function getLinkProps(href) {
    const isActive =
      pathname === href ||
      (href !== "/dashboard" && pathname.startsWith(`${href}/`));

    return {
      className: `dashboard-sidebar__link${isActive ? " dashboard-sidebar__link--active" : ""}`,
      "aria-current": isActive ? "page" : undefined,
    };
  }

  return (
    <aside className="dashboard-sidebar">
      <header className="dashboard-sidebar__brand">
        <h1>CRM</h1>
        <p>Customer Relationship Management</p>
      </header>

      <nav className="dashboard-sidebar__nav" aria-label="Main navigation">
        <h2>Workspace</h2>
        <ul>
          <li>
            <Link href="/dashboard" {...getLinkProps("/dashboard")}>
              Overview
            </Link>
          </li>
          <li>
            <Link href="/customers" {...getLinkProps("/customers")}>
              Customers
            </Link>
          </li>
          <li>
            <Link href="/leads" {...getLinkProps("/leads")}>
              Leads
            </Link>
          </li>
          <li>
            <Link
              href="/lead-assignments"
              {...getLinkProps("/lead-assignments")}
            >
              Lead Assignment
            </Link>
          </li>
          <li>
            <Link href="/contacts" {...getLinkProps("/contacts")}>
              Contacts
            </Link>
          </li>
          <li>
            <Link href="/deals" {...getLinkProps("/deals")}>
              Deals
            </Link>
          </li>
          <li>
            <Link href="/activities" {...getLinkProps("/activities")}>
              Activities
            </Link>
          </li>
          <li>
            <Link href="/reports" {...getLinkProps("/reports")}>
              Reports
            </Link>
          </li>
          <li>
            <Link href="/ai-automation" {...getLinkProps("/ai-automation")}>
              AI Automation
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        className="dashboard-sidebar__nav dashboard-sidebar__nav--admin"
        aria-label="Workspace administration"
      >
        <h2>Administration</h2>
        <ul>
          <li>
            <Link href="/settings" {...getLinkProps("/settings")}>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="dashboard-layout">
        <Suspense
          fallback={
            <aside
              className="dashboard-sidebar"
              aria-label="Loading navigation"
            />
          }
        >
          <DashboardSidebar />
        </Suspense>

        <div className="dashboard-main">
          <header className="dashboard-topbar">
            <div className="dashboard-topbar__workspace">
              <p>Current workspace</p>
              <p>Company Workspace</p>
            </div>

            <div className="dashboard-topbar__search">
              <form action="/search">
                <label htmlFor="crm-search">Search CRM</label>
                <input
                  id="crm-search"
                  name="q"
                  type="search"
                  placeholder="Search..."
                />
              </form>
            </div>

            <div className="dashboard-topbar__actions">
              <button type="button">Notifications</button>
              <button type="button">Profile</button>
            </div>
          </header>

          <main className="dashboard-main__content">{children}</main>
        </div>
      </div>

      {/* Floating assistant is available throughout this dashboard layout. */}
      <FloatingAI />
    </>
  );
}

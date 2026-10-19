import "../../../styles/add-lead-form.css";

export default function AddLeadForm() {
  return (
    <section className="add-lead" aria-labelledby="add-lead-heading">
      <header className="add-lead__header">
        <div className="add-lead__header-content">
          <h2 className="add-lead__title" id="add-lead-heading">
            Add New Lead
          </h2>
          <p className="add-lead__description">
            Enter the details of the potential customer.
          </p>
        </div>
      </header>

      <form className="add-lead__form">
        {/* Basic contact information */}
        <fieldset className="add-lead__fieldset">
          <legend className="add-lead__legend">
            <span className="add-lead__legend-number">01</span>
            Lead Information
          </legend>

          <div className="add-lead__fields-grid">
            <div className="add-lead__field">
              <label className="add-lead__label" htmlFor="fullName">
                Full Name <span className="add-lead__required">*</span>
              </label>
              <input
                className="add-lead__input"
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Enter full name"
                required
              />
            </div>

            <div className="add-lead__field">
              <label className="add-lead__label" htmlFor="email">
                Email Address <span className="add-lead__required">*</span>
              </label>
              <input
                className="add-lead__input"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                required
              />
            </div>

            <div className="add-lead__field">
              <label className="add-lead__label" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="add-lead__input"
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Enter phone number"
              />
            </div>

            <div className="add-lead__field">
              <label className="add-lead__label" htmlFor="company">
                Company Name
              </label>
              <input
                className="add-lead__input"
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Enter company name"
              />
            </div>
          </div>
        </fieldset>

        {/* Source, lifecycle status, and notes */}
        <fieldset className="add-lead__fieldset">
          <legend className="add-lead__legend">
            <span className="add-lead__legend-number">02</span>
            Lead Details
          </legend>

          <div className="add-lead__fields-grid">
            <div className="add-lead__field">
              <label className="add-lead__label" htmlFor="source">
                Lead Source <span className="add-lead__required">*</span>
              </label>
              <select
                className="add-lead__input add-lead__select"
                id="source"
                name="source"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a source
                </option>
                <option value="website">Website</option>
                <option value="referral">Referral</option>
                <option value="social-media">Social Media</option>
                <option value="cold-outreach">Cold Outreach</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="add-lead__field">
              <label className="add-lead__label" htmlFor="status">
                Lead Status <span className="add-lead__required">*</span>
              </label>
              <select
                className="add-lead__input add-lead__select"
                id="status"
                name="status"
                defaultValue="new"
                required
              >
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="unqualified">Unqualified</option>
              </select>
            </div>

            <div className="add-lead__field add-lead__field--full">
              <label className="add-lead__label" htmlFor="notes">
                Notes <span className="add-lead__optional">(Optional)</span>
              </label>
              <textarea
                className="add-lead__input add-lead__textarea"
                id="notes"
                name="notes"
                rows={4}
                placeholder="Add any relevant information about this lead"
              />
            </div>
          </div>
        </fieldset>

        {/* Salesperson assignment */}
        <fieldset className="add-lead__fieldset">
          <legend className="add-lead__legend">
            <span className="add-lead__legend-number">03</span>
            Assignment
          </legend>

          <div className="add-lead__fields-grid">
            <div className="add-lead__field add-lead__field--full">
              <label className="add-lead__label" htmlFor="assignedTo">
                Assign to Salesperson
                <span className="add-lead__optional"> (Optional)</span>
              </label>
              <select
                className="add-lead__input add-lead__select"
                id="assignedTo"
                name="assignedTo"
                defaultValue=""
              >
                <option value="">Leave unassigned</option>
              </select>
              <p className="add-lead__helper">
                You can assign this lead to a salesperson later.
              </p>
            </div>
          </div>
        </fieldset>

        {/* Form actions */}
        <footer className="add-lead__footer">
          <p className="add-lead__required-note">
            <span className="add-lead__required">*</span> Required fields
          </p>

          <div className="add-lead__actions">
            <button
              className="add-lead__button add-lead__button--cancel"
              type="button"
            >
              Cancel
            </button>
            <button
              className="add-lead__button add-lead__button--submit"
              type="submit"
            >
              Create Lead
            </button>
          </div>
        </footer>
      </form>
    </section>
  );
}

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:jacobbroughtondev@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="main page-enter">
      <section className="work-header">
        <h1 className="section-title">Contact</h1>
        <p className="section-sub">
          Have a project in mind or just want to talk? I'd love to hear from you.
        </p>
      </section>

      <section className="contact-page-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-field">
            <span className="contact-label">Name</span>
            <input
              type="text"
              name="name"
              required
              className="contact-input"
              placeholder="Your name"
            />
          </label>
          <label className="contact-field">
            <span className="contact-label">Email</span>
            <input
              type="email"
              name="email"
              required
              className="contact-input"
              placeholder="you@example.com"
            />
          </label>
          <label className="contact-field">
            <span className="contact-label">Message</span>
            <textarea
              name="message"
              required
              className="contact-input contact-textarea"
              placeholder="Tell me about your project…"
              rows={5}
            />
          </label>
          <div className="contact-form-actions">
            <button type="submit" className="btn">
              Send message
            </button>
          </div>
        </form>

      </section>
    </main>
  );
}
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./Home.css";
import "../../cms-mobile.css";

const towns = [
  "Brevard",
  "Hendersonville",
  "Asheville",
  "Matthews",
  "Pisgah Forest",
  "Fletcher",
  "Mills River",
  "Etowah",
  "Rosman",
  "Lake Toxaway",
  "Penrose",
];

const problems = [
  {
    icon: "phone",
    title: "Looks dated on mobile",
    desc: "Half your customers are finding you on their phone. If your site doesn't work on a small screen, they're gone in seconds.",
  },
  {
    icon: "speed",
    title: "Painfully slow",
    desc: "Slow pages cost you customers. A one-second delay can cut conversions by 7% — and Google ranks slow sites lower too.",
  },
  {
    icon: "edit",
    title: "Can't make changes yourself",
    desc: "Need to update your hours or swap a photo? You shouldn't have to call someone and wait a week for a simple text change.",
  },
  {
    icon: "shield",
    title: "Agency lock-in and upsells",
    desc: "The last pitch came with SEO packages, social media management, and a monthly retainer you didn't ask for. You just want a website.",
  },
  {
    icon: "target",
    title: "You need a site, not a strategy",
    desc: "Clean, fast, professional — that's the bar. You don't need a 'full digital transformation'. You need something that works and is easy to maintain.",
  },
];

const problemIcons = {
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  speed: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  edit: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  target: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

const services = [
  {
    title: "Service Businesses",
    desc: "Contractors, trades, repair shops, professional services.",
  },
  {
    title: "Retail & E-Commerce",
    desc: "Product listings, online ordering, inventory showcases.",
  },
  {
    title: "Restaurants & Cafes",
    desc: "Menus, hours, and online ordering for food businesses.",
  },
  {
    title: "Community & Non-Profits",
    desc: "Event pages, donation links, volunteer sign-ups.",
  },
];

const testimonials = [
  {
    quote:
      "Our old site was from 2018 and it showed. Jacob rebuilt it in a week and now we can actually update our menu ourselves. Our phone orders went up noticeably after the launch.",
    name: "Sarah M.",
    role: "Owner, Mountain Harvest Cafe · Brevard, NC",
  },
  {
    quote:
      "I'd been putting off a new website for two years because every quote I got was $8,000+ with a ton of stuff I didn't need. Jacob listened to what I actually wanted and delivered it for a fraction of that.",
    name: "Rick T.",
    role: "Owner, Pisgah Repair Co. · Brevard, NC",
  },
  {
    quote:
      "What stood out was how easy the process was. We talked once, he showed me a draft a couple days later, and after one round of changes it was live. No endless meetings, no jargon, just a great website.",
    name: "Anette L.",
    role: "Owner, Brevard Pet Supply · Brevard, NC",
  },
];

const steps = [
  {
    num: "01",
    title: "Talk",
    desc: "We have a conversation about your business, what you need, and what your current site is missing. No pressure, no pitch.",
  },
  {
    num: "02",
    title: "Build",
    desc: "I build your site. You get a preview link to see progress and give feedback. Changes are fast — no waiting weeks for revisions.",
  },
  {
    num: "03",
    title: "Launch",
    desc: "Your site goes live at your domain. I make sure everything works and show you how to make basic updates yourself if you want.",
  },
];

function TownCycler() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % towns.length);
        setFade(true);
      }, 250);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`cycler ${fade ? "cycler-in" : "cycler-out"}`}
      aria-label={towns[index]}
    >
      {towns[index]}
    </span>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

const mobileFieldLabel: Record<string, string> = {
  headline: "Hero headline",
  tagline: "Hero tagline",
  cta: "CTA button",
  about: "About section",
  hours: "Hours",
  phone: "Phone",
  brand: "Business name",
};

export default function Home() {
  const [cmsHeadline, setCmsHeadline] = useState(
    "Fresh coffee, every day."
  );
  const [cmsTagline, setCmsTagline] = useState(
    "Locally roasted & brewed in the heart of Brevard."
  );
  const [cmsCta, setCmsCta] = useState("View our menu");
  const [cmsAbout, setCmsAbout] = useState(
    "We're a small independent cafe serving specialty coffee, fresh pastries, and good conversation. Stop by for your morning cup or stay a while."
  );
  const [cmsHours, setCmsHours] = useState("7:00 AM - 3:00 PM");
  const [cmsPhone, setCmsPhone] = useState("(828) 555-0142");
  const [previewBrand, setPreviewBrand] = useState("Mountain Peak Cafe");
  const [previewUrl, setPreviewUrl] = useState("mountainpeakcafe.com");
  const [mobileEditField, setMobileEditField] = useState<string | null>(null);
  const [mobileEditValue, setMobileEditValue] = useState("");

  const headlineRef = useRef<HTMLInputElement>(null);
  const taglineRef = useRef<HTMLInputElement>(null);
  const ctaRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLTextAreaElement>(null);
  const hoursRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const presets: Record<string, {
    headline: string; tagline: string; cta: string; about: string; hours: string; phone: string; brand: string; url: string
  }> = {
    cafe: {
      headline: "Fresh coffee, every day.",
      tagline: "Locally roasted & brewed in the heart of Brevard.",
      cta: "View our menu",
      about: "We're a small independent cafe serving specialty coffee, fresh pastries, and good conversation. Stop by for your morning cup or stay a while.",
      hours: "7:00 AM - 3:00 PM",
      phone: "(828) 555-0142",
      brand: "Mountain Peak Cafe",
      url: "mountainpeakcafe.com",
    },
    restaurant: {
      headline: "Farm-to-table dining, close to home.",
      tagline: "Seasonal ingredients, handcrafted plates, and a warm atmosphere.",
      cta: "Reserve a table",
      about: "We source locally from WNC farms to bring you dishes that change with the seasons. Whether it's date night or a family dinner, come experience food worth slowing down for.",
      hours: "5:00 PM - 9:30 PM",
      phone: "(828) 555-0187",
      brand: "The Farm Table",
      url: "thefarmtablewnc.com",
    },
    bike: {
      headline: "Your next ride starts here.",
      tagline: "Sales, service & gear for every trail and road around Brevard.",
      cta: "Shop bikes",
      about: "From full-suspension mountain bikes to road and gravel, we've got the bikes and the expertise to keep you rolling. Tune-ups, repairs, and custom builds — all done in-house.",
      hours: "9:00 AM - 6:00 PM",
      phone: "(828) 555-0203",
      brand: "Pisgah Cycles",
      url: "pisgahcycles.com",
    },
    mechanic: {
      headline: "Honest work. Fair price.",
      tagline: "Brakes, oil, tires, and anything else your car needs.",
      cta: "Schedule an appointment",
      about: "Family-owned auto repair serving Brevard and Transylvania County for over 15 years. No upsells, no unnecessary repairs — just solid work that gets you back on the road safely.",
      hours: "8:00 AM - 5:00 PM",
      phone: "(828) 555-0164",
      brand: "Brevard Auto Repair",
      url: "brevardautorepair.com",
    },
    barber: {
      headline: "Look sharp, feel sharp.",
      tagline: "Classic cuts, hot towel shaves, and beard trims for every style.",
      cta: "Book an appointment",
      about: "Step into a real barbershop. We do traditional scissor cuts, modern fades, and straight-razor shaves in a relaxed, no-appointment-necessary shop. Walk-ins always welcome.",
      hours: "9:00 AM - 6:00 PM",
      phone: "(828) 555-0312",
      brand: "Brevard Barbers",
      url: "brevardbarbers.com",
    },
    bakery: {
      headline: "Fresh from the oven, daily.",
      tagline: "Handmade breads, pastries, and cakes baked in small batches.",
      cta: "View today's menu",
      about: "We start before sunrise so everything on our shelves is baked fresh that morning. Sourdough, croissants, muffins, and custom cakes — made from scratch with local ingredients.",
      hours: "7:00 AM - 2:00 PM",
      phone: "(828) 555-0278",
      brand: "The Daily Loaf",
      url: "dailyloafbrevard.com",
    },
    lawncare: {
      headline: "A yard you're proud of.",
      tagline: "Mowing, trimming, mulching — weekly or one-time, we've got you covered.",
      cta: "Get a free quote",
      about: "We take care of the mowing, edging, weeding, and blowing so you can enjoy your yard instead of working in it. Serving Brevard and surrounding areas with reliable same-day-week service.",
      hours: "7:00 AM - 5:00 PM",
      phone: "(828) 555-0095",
      brand: "Pisgah Lawn Care",
      url: "pisgahlawncare.com",
    },
    petgrooming: {
      headline: "Happy pets, happy people.",
      tagline: "Full-service grooming, baths, and nail trims for dogs and cats.",
      cta: "Book a groom",
      about: "Your pet deserves the best. We offer gentle, patient grooming in a low-stress environment — from full haircuts and deshedding treatments to nail trims and ear cleaning.",
      hours: "8:00 AM - 4:00 PM",
      phone: "(828) 555-0221",
      brand: "Happy Paws Grooming",
      url: "happypawsbrevard.com",
    },
  };

  function loadPreset(key: keyof typeof presets) {
    const p = presets[key];
    setCmsHeadline(p.headline);
    setCmsTagline(p.tagline);
    setCmsCta(p.cta);
    setCmsAbout(p.about);
    setCmsHours(p.hours);
    setCmsPhone(p.phone);
    setPreviewBrand(p.brand);
    setPreviewUrl(p.url);
  }

  function openMobileEditor(field: string, value: string) {
    if (window.innerWidth >= 768) return;
    setMobileEditField(field);
    setMobileEditValue(value);
  }

  function applyMobileEdit() {
    if (!mobileEditField) return;
    switch (mobileEditField) {
      case "headline": setCmsHeadline(mobileEditValue); break;
      case "tagline": setCmsTagline(mobileEditValue); break;
      case "cta": setCmsCta(mobileEditValue); break;
      case "about": setCmsAbout(mobileEditValue); break;
      case "hours": setCmsHours(mobileEditValue); break;
      case "phone": setCmsPhone(mobileEditValue); break;
      case "brand": setPreviewBrand(mobileEditValue); break;
    }
    setMobileEditField(null);
  }

  function cancelMobileEdit() {
    setMobileEditField(null);
  }

  return (
    <main className="main page-enter">
      {/* Hero */}
      <Section id="hero">
        <h1 className="hero-tagline">
          Supercharged websites for <span className="accent"><TownCycler /></span> businesses.
        </h1>
        <p className="hero-desc">
          Built by someone with 8+ years of technical and design / UX experience.
        </p>
        <div className="hero-cta">
          <Link to="/contact" className="btn">
            Let's talk
          </Link>
          <Link to="/work" className="btn btn-ghost">
            See my work
          </Link>
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <h2 className="section-title">About me</h2>
        <div className="about-content">
          <p>
            I'm Jacob Broughton, a software engineer based in{" "}
            <strong>Brevard, NC</strong>. I've built and shipped web
            applications used by over 100,000 people and build websites for
            local businesses on the side using modern technology.
          </p>
          <p>
            <Link to="/about">More about me &rarr;</Link>
          </p>
        </div>
      </Section>

      {/* Problem */}
      <Section id="problem">
        <h2 className="section-title">If this sounds familiar&hellip;</h2>
        <p className="section-sub">
          You know your website needs help, but every time you look into it, it
          feels like a hassle or a sales pitch.
        </p>
        <div className="problem-grid">
          {problems.map((p) => {
            const icon = problemIcons[p.icon as keyof typeof problemIcons];
            return (
              <div key={p.title} className="problem-card">
                <div className="problem-icon">{icon}</div>
                <div className="problem-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <h2 className="section-title">What I build</h2>
        <p className="section-sub">
          I work with all kinds of local businesses. If you serve customers in
          WNC, I can build you a site that does what you need.
        </p>
        <div className="service-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <h3>{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CMS */}
      <Section id="cms">
        <h2 className="section-title">You're in control</h2>
        <p className="section-sub">
          Every site comes with a dedicated content manager. No WordPress, no
          bloated dashboards &mdash; just the fields that matter for your
          business. Edit your content, hit save, and see it go live instantly.
        </p>

        <div className="cms-presets">
          <span className="cms-presets-label">Presets:</span>
          <button className="cms-preset-btn" onClick={() => loadPreset("cafe")}>Cafe</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("restaurant")}>Restaurant</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("bike")}>Bike shop</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("mechanic")}>Mechanic</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("barber")}>Barber</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("bakery")}>Bakery</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("lawncare")}>Lawn care</button>
          <button className="cms-preset-btn" onClick={() => loadPreset("petgrooming")}>Pet grooming</button>
        </div>

        <div className="cms-layout">
          {/* Preview — first so it stacks on top on mobile */}
          <div className="cms-preview">
            <div className="cms-preview-bar">
              <div className="cms-preview-dots">
                <span /><span /><span />
              </div>
              <span className="cms-preview-url">{previewUrl}</span>
            </div>
            <div className="cms-preview-page">
              <nav className="cms-preview-nav">
                <span className="cms-preview-brand" data-cms-field="brand" onClick={() => openMobileEditor("brand", previewBrand)}>{previewBrand}</span>
                <div className="cms-preview-navlinks">
                  <span>Menu</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </nav>
              <section className="cms-preview-hero">
                <h3 className="cms-preview-headline" data-cms-field="headline" onClick={() => openMobileEditor("headline", cmsHeadline)}>{cmsHeadline}</h3>
                <p className="cms-preview-tagline" data-cms-field="tagline" onClick={() => openMobileEditor("tagline", cmsTagline)}>{cmsTagline}</p>
                <span className="cms-preview-cta" data-cms-field="cta" onClick={() => openMobileEditor("cta", cmsCta)}>{cmsCta}</span>
              </section>
              <section className="cms-preview-section">
                <h4>About us</h4>
                <p className="cms-preview-text" data-cms-field="about" onClick={() => openMobileEditor("about", cmsAbout)}>{cmsAbout}</p>
              </section>
              <footer className="cms-preview-foot">
                <span data-cms-field="hours" onClick={() => openMobileEditor("hours", cmsHours)}>Hours: {cmsHours}</span>
                <span data-cms-field="phone" onClick={() => openMobileEditor("phone", cmsPhone)}>Phone: {cmsPhone}</span>
              </footer>
            </div>

            {/* Mobile editor — appears below preview when user taps an element */}
            <div className={`cms-mobile-editor${mobileEditField ? " open" : ""}`}>
              {mobileEditField && (
                <>
                  <span className="cms-mobile-label">
                    {mobileFieldLabel[mobileEditField] || mobileEditField}
                  </span>
                  {mobileEditField === "about" ? (
                    <textarea
                      className="cms-mobile-input"
                      rows={3}
                      value={mobileEditValue}
                      onChange={(e) => setMobileEditValue(e.target.value)}
                    />
                  ) : (
                    <input
                      className="cms-mobile-input"
                      value={mobileEditValue}
                      onChange={(e) => setMobileEditValue(e.target.value)}
                    />
                  )}
                  <div className="cms-mobile-actions">
                    <button className="cms-mobile-btn cms-mobile-cancel" onClick={cancelMobileEdit}>Cancel</button>
                    <button className="cms-mobile-btn cms-mobile-apply" onClick={applyMobileEdit}>Apply</button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* CMS panel — hidden on mobile, full form on desktop */}
          <div className="cms-demo">
            <div className="cms-toolbar">
              <span className="cms-toolbar-title">Page content</span>
              <span className="cms-toolbar-live">Live</span>
            </div>
            <div className="cms-fields">
              <label className="cms-field">
                <span className="cms-label">Hero headline</span>
                <input
                  className="cms-input"
                  ref={headlineRef}
                  value={cmsHeadline}
                  onChange={(e) => setCmsHeadline(e.target.value)}
                />
              </label>
              <label className="cms-field">
                <span className="cms-label">Hero tagline</span>
                <input
                  className="cms-input"
                  ref={taglineRef}
                  value={cmsTagline}
                  onChange={(e) => setCmsTagline(e.target.value)}
                />
              </label>
              <label className="cms-field">
                <span className="cms-label">CTA button</span>
                <input
                  className="cms-input"
                  ref={ctaRef}
                  value={cmsCta}
                  onChange={(e) => setCmsCta(e.target.value)}
                />
              </label>
              <label className="cms-field">
                <span className="cms-label">About section</span>
                <textarea
                  className="cms-input cms-textarea"
                  rows={2}
                  ref={aboutRef}
                  value={cmsAbout}
                  onChange={(e) => setCmsAbout(e.target.value)}
                />
              </label>
              <div className="cms-row">
                <label className="cms-field">
                  <span className="cms-label">Hours</span>
                  <input
                    className="cms-input"
                    ref={hoursRef}
                    value={cmsHours}
                    onChange={(e) => setCmsHours(e.target.value)}
                  />
                </label>
                <label className="cms-field">
                  <span className="cms-label">Phone</span>
                  <input
                    className="cms-input"
                    ref={phoneRef}
                    value={cmsPhone}
                    onChange={(e) => setCmsPhone(e.target.value)}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials">
        <h2 className="section-title">What clients say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial">
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-attribution">
                <span className="testimonial-name">{t.name}</span>
                &ensp;—&ensp;{t.role}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process">
        <h2 className="section-title">How it works</h2>
        <p className="section-sub">
          Three simple steps from start to launch. No long contracts, no hidden
          fees.
        </p>
        <div className="process-steps">
          {steps.map((s) => (
            <div key={s.num} className="process-step">
              <div className="step-content">
                <h3><span className="step-number">{s.num}</span>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <h2 className="section-title">Frequently asked questions</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary className="faq-q">How much does a website cost?</summary>
            <p className="faq-a">
              It depends on what you need — a simple 3-4 page site is different
              from one with online ordering or a booking system. I'll give you a
              flat price upfront with no surprises. Most small business sites
              start around $1,200 and go up from there.
            </p>
          </details>
          <details className="faq-item">
            <summary className="faq-q">How long does it take?</summary>
            <p className="faq-a">
              Most sites go from conversation to live in 2-3 weeks. If you have
              your content ready (photos, text, logos), we can move even faster.
            </p>
          </details>
          <details className="faq-item">
            <summary className="faq-q">Can I update the site myself after it's done?</summary>
            <p className="faq-a">
              Yes. I build sites you can easily update — change your hours,
              swap out photos, add menu items. If you'd rather not touch it, I
              can handle updates for a small monthly fee.
            </p>
          </details>
          <details className="faq-item">
            <summary className="faq-q">Do I need hosting or a domain?</summary>
            <p className="faq-a">
              I'll help you set up both. I recommend simple, affordable hosting
              that costs around $10-15/month. If you already have a domain,
              I'll point it to the new site so nothing breaks.
            </p>
          </details>
          <details className="faq-item">
            <summary className="faq-q">Do you offer SEO or marketing?</summary>
            <p className="faq-a">
              I build sites that are technically SEO-friendly — fast load times,
              clean code, proper meta tags, mobile-ready. What I don't do is
              ongoing SEO campaigns or social media management. If that's what
              you need, I can point you to people who do it well.
            </p>
          </details>
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="contact" className="cta-section">
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Ready to rebuild?
        </h2>
        <p>
          Send me an email and tell me about your business. I'll reply within a
          day and we can take it from there.
        </p>
        <a href="mailto:jacobbroughtondev@gmail.com" className="btn">
          jacobbroughtondev@gmail.com
        </a>
      </Section>
    </main>
  );
}
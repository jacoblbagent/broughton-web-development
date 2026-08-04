import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <main className="main page-enter">
      <section className="work-header">
        <h1 className="section-title">About</h1>
        <p className="section-sub">
          A software engineer building websites for small businesses in Brevard,
          NC &mdash; with years of production experience and a new edge.
        </p>
      </section>

      <section className="about-page-section">
        <div className="about-page-content">
          <h2>Hi, I'm Jacob</h2>
          <p>
            I'm a software engineer based in <strong>Brevard, North Carolina</strong>.
            I've been building web applications professionally for years &mdash;
            production software used by over 100,000 people, still running today.
            Before that, I started learning to code at a full-stack web
            development bootcamp at UNCC, and I've been building things ever
            since.
          </p>
          <p>
            I currently work as a software engineer at Lowe's Companies, Inc. in
            Charlotte. My day-to-day is front-end development with React,
            TypeScript, GraphQL, and modern tooling. I know what it takes to
            ship reliable, performant software at scale.
          </p>
          <p>
            See my personal portfolio at{" "}
            <a href="https://jlbroughton.com" target="_blank" rel="noopener">
              jlbroughton.com
            </a>.
          </p>

          <h2>Why I started this</h2>
          <p>
            Living in Brevard, I see small businesses every day that have great
            products, great service, and loyal customers &mdash; but a website
            that doesn't reflect any of it. Outdated. Slow. Not mobile-friendly.
            Hard to update. It's a problem I can solve.
          </p>
          <p>
            The local agencies I've seen tend to bundle web design with SEO
            packages, social media management, and ongoing retainers. That's not
            what every business needs. Sometimes you just need a great website
            built by someone who actually builds software for a living.
          </p>
          <p>
            That's the gap I'm filling: an experienced developer who builds
            clean, professional websites for local businesses &mdash; without
            upselling you on services you don't need.
          </p>

          <h2>How I work</h2>
          <p>
            I build with modern technology &mdash; React, Next.js, Node.js &mdash;
            but I never lead with it. What matters to you is that the site loads
            fast, works on every device, is easy to update, and looks
            professional. The tech is just how I deliver that.
          </p>
          <p>
            Every project starts with a conversation. I learn about your
            business, your customers, and what your current site is missing.
            Then I build it. You see progress as it happens, feedback is fast,
            and when it's done, you get a site that's yours to maintain or I can
            help with updates as needed.
          </p>
          <p>
            Because I work with AI as a core part of my process, I can move
            faster than a traditional freelancer &mdash; iterating on designs,
            eliminating repetitive work, and spending my time on what actually
            makes your site better. The result is a professional, production-grade
            website in less time and at a better price.
          </p>

          <div className="about-cta" style={{ marginTop: "2rem" }}>
            <Link to="/work" className="btn btn-ghost" style={{ marginRight: "12px" }}>
              See my work
            </Link>
            <a href="mailto:jacobbroughtondev@gmail.com" className="btn">
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
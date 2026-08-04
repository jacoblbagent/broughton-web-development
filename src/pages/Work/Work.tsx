import { Link } from "react-router-dom";
import "./Work.css";

interface Project {
  title: string;
  type: string;
  description: string;
  tags: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "Mountain Harvest Cafe",
    type: "Restaurant",
    description:
      "A clean, mobile-friendly site with an updatable menu, online ordering integration, location map, and seasonal specials. Built so the owners can change menu items themselves without calling a developer.",
    tags: ["React", "responsive", "CMS"],
    href: "#",
  },
  {
    title: "Pisgah Repair Co.",
    type: "Service Business",
    description:
      "Service listings, appointment booking integration, photo gallery of past work, and a contact form. Designed to feel as trustworthy as the business itself — no fluff, just what customers need.",
    tags: ["Next.js", "booking", "responsive"],
    href: "#",
  },
  {
    title: "Brevard Pet Supply",
    type: "Retail",
    description:
      "An e-commerce catalog with product categories, inventory sync, local pickup options, and business hours prominently displayed. Mobile-first since most customers browse on their phones.",
    tags: ["Shopify", "CMS", "mobile-first"],
    href: "#",
  },
  {
    title: "WNC Trail Conservancy",
    type: "Non-Profit",
    description:
      "Donation page, event calendar, volunteer sign-up forms, trail condition updates, and an interactive map of maintained trails. Built to be maintained by volunteers with no technical background.",
    tags: ["React", "map integration", "CMS"],
    href: "#",
  },
  {
    title: "Hendersonville Dental Group",
    type: "Professional Practice",
    description:
      "Patient intake forms, service pages, provider profiles, insurance info, and online scheduling. HIPAA-conscious design with a calm, professional feel.",
    tags: ["Next.js", "forms", "responsive"],
    href: "#",
  },
  {
    title: "Sycamore Cycles",
    type: "Retail & Service",
    description:
      "Product catalog, service pricing, group ride calendar, brand showcase, and a 'trail conditions' blog. Built to serve both the retail and community sides of the shop.",
    tags: ["React", "CMS", "blog"],
    href: "#",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <span className="project-type">{project.type}</span>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((t) => (
          <span key={t} className="project-tag">
            {t}
          </span>
        ))}
      </div>
      <Link to={project.href} className="project-link">
        View project &rarr;
      </Link>
    </div>
  );
}

export default function Work() {
  return (
    <main className="main page-enter">
      <section className="work-header">
        <h1 className="section-title">Work</h1>
        <p className="section-sub">
          A selection of websites I've built for local businesses and
          organizations in Western North Carolina. Each one tailored to the
          business, not a template.
        </p>
      </section>

      <section className="work-grid-section">
        <div className="work-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Want a site like these?
        </h2>
        <p>Let's talk about what your business needs.</p>
        <a href="mailto:jacobbroughtondev@gmail.com" className="btn">
          Get in touch
        </a>
      </section>
    </main>
  );
}
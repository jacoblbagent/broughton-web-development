import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("bwd-theme");
    if (stored === "dark" || stored === "light") return stored;
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("bwd-theme", theme);
  }, [theme]);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-brand" aria-label="Home">
          <span className="full">Broughton Web Development</span>
          <span className="initials">BWD</span>
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={pathname === l.to ? "nav-active" : ""}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              className="theme-toggle"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
import { useState } from "react";

const LINKS = [
  { href: "#about", label: "~/about" },
  { href: "#skills", label: "~/skills" },
  { href: "#experience", label: "~/experience" },
  { href: "#projects", label: "~/projects" },
  { href: "#freelance", label: "~/freelance" },
  { href: "#more", label: "~/more" },
  { href: "#contact", label: "~/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          JR<span className="nav-brand-dot">.</span>
        </a>

        <nav className={`nav-links ${open ? "nav-links--open" : ""}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`nav-toggle ${open ? "nav-toggle--open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

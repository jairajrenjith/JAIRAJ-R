import { profile } from "../data";

const NODES = [
  { x: 60, y: 90 }, { x: 230, y: 40 }, { x: 400, y: 120 }, { x: 540, y: 55 },
  { x: 150, y: 230 }, { x: 340, y: 260 }, { x: 490, y: 205 }, { x: 610, y: 285 },
  { x: 90, y: 340 }, { x: 270, y: 380 }, { x: 460, y: 350 },
];

const EDGES = [
  [0, 1], [1, 2], [2, 3], [0, 4], [1, 4], [4, 5], [2, 5],
  [5, 6], [3, 6], [6, 7], [4, 8], [5, 9], [8, 9], [9, 10], [6, 10],
];

function NodeField() {
  return (
    <svg className="node-field" viewBox="0 0 640 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {EDGES.map(([a, b], i) => (
        <line
          key={`e${i}`}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          pathLength="1"
          className="node-edge"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
      {NODES.map((n, i) => (
        <circle
          key={`n${i}`}
          cx={n.x}
          cy={n.y}
          r={i % 3 === 0 ? 5 : 3.5}
          className="node-dot"
          style={{ animationDelay: `${i * 0.22}s` }}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <NodeField />
      <div className="hero-inner">
        <p className="eyebrow eyebrow--mono">[proc: hero] — {profile.location}</p>
        <h1 className="hero-title">
          {profile.name}
          <span className="hero-cursor" />
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-tagline">{profile.tagline}</p>

        <ul className="hero-chips">
          {profile.focusFields.map((field) => (
            <li key={field} className="chip chip--amber">
              {field}
            </li>
          ))}
        </ul>

        <div className="hero-cta">
          <a href="#projects" className="btn btn--primary">
            View projects
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            Resume
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in touch
          </a>
        </div>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll to about section">
        <span />
      </a>
    </section>
  );
}

import Reveal from "./Reveal";
import { projects } from "../data";
import { GithubIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal as="p" className="eyebrow eyebrow--mono">
        [proc: projects]
      </Reveal>
      <Reveal as="h2" className="section-title">
        Projects
      </Reveal>

      <div className="card-grid">
        {projects.map((proj, i) => (
          <Reveal key={proj.name} className="project-card" delay={(i % 2) * 90}>
            <div className="project-card-head">
              <h3>{proj.name}</h3>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label={`${proj.name} on GitHub`}
              >
                <GithubIcon />
              </a>
            </div>
            <p className="project-context">{proj.context}</p>
            <p className="project-description">{proj.description}</p>
            <ul className="project-points">
              {proj.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
            <ul className="tag-cloud">
              {proj.tags.map((tag) => (
                <li key={tag} className="chip chip--outline">
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { freelanceWork } from "../data";
import { GithubIcon, ExternalLinkIcon } from "./Icons";

export default function Freelance() {
  return (
    <section id="freelance" className="section">
      <Reveal as="p" className="eyebrow eyebrow--mono">
        [proc: freelance]
      </Reveal>
      <Reveal as="h2" className="section-title">
        Freelance &amp; Client Work
      </Reveal>

      <div className="card-grid">
        {freelanceWork.map((work, i) => (
          <Reveal key={work.name} className="project-card project-card--freelance" delay={(i % 2) * 90}>
            <h3>{work.name}</h3>
            <p className="project-description">{work.description}</p>
            <ul className="tag-cloud">
              {work.tags.map((tag) => (
                <li key={tag} className="chip chip--outline">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="project-links">
              <a href={work.live} target="_blank" rel="noopener noreferrer" className="text-link">
                <ExternalLinkIcon /> Live site
              </a>
              <a href={work.github} target="_blank" rel="noopener noreferrer" className="text-link">
                <GithubIcon /> Source
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

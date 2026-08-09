import Reveal from "./Reveal";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal as="p" className="eyebrow eyebrow--mono">
        [proc: experience]
      </Reveal>
      <Reveal as="h2" className="section-title">
        Experience
      </Reveal>

      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.role} className="timeline-entry" delay={i * 90}>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <p className="timeline-period">{job.period}</p>
              <h3 className="timeline-role">{job.role}</h3>
              <p className="timeline-org">{job.org}</p>
              <ul className="timeline-points">
                {job.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { profile, education } from "../data";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal as="p" className="eyebrow eyebrow--mono">
        [proc: about]
      </Reveal>
      <Reveal as="h2" className="section-title">
        About
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-bio" delay={80}>
          {profile.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </Reveal>

        <Reveal className="about-edu" delay={160}>
          <p className="about-edu-degree">{education.degree}</p>
          <p className="about-edu-institute">{education.institute}</p>
          <p className="about-edu-period">{education.period}</p>

          <div className="about-edu-cgpa">
            <span className="about-edu-cgpa-value">{education.cgpa}</span>
            <span className="about-edu-cgpa-label">CGPA</span>
          </div>

          <ul className="about-edu-sems">
            {education.semesters.map((s) => (
              <li key={s.label}>
                <span>{s.label}</span>
                <span>{s.value}</span>
              </li>
            ))}
          </ul>

        </Reveal>
      </div>
    </section>
  );
}

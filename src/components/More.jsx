import Reveal from "./Reveal";
import { achievements, activities, certifications, softSkills, interests } from "../data";

export default function More() {
  return (
    <section id="more" className="section">
      <Reveal as="p" className="eyebrow eyebrow--mono">
        [proc: beyond-the-code]
      </Reveal>
      <Reveal as="h2" className="section-title">
        Beyond the Code
      </Reveal>

      <div className="more-grid">
        <Reveal className="more-block" delay={0}>
          <p className="more-block-label">Achievements</p>
          <ul className="more-list">
            {achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="more-block" delay={80}>
          <p className="more-block-label">Activities &amp; Leadership</p>
          <ul className="more-list more-list--roles">
            {activities.map((act) => (
              <li key={act.role + act.org}>
                <span className="more-role">{act.role}</span>
                <span className="more-org"> — {act.org}</span>
                <p className="more-role-desc">{act.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="more-block" delay={160}>
          <p className="more-block-label">Certifications &amp; Workshops</p>
          <ul className="more-list">
            {certifications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

          <p className="more-block-label more-block-label--spaced">Soft Skills</p>
          <ul className="tag-cloud">
            {softSkills.map((s) => (
              <li key={s} className="chip chip--amber">
                {s}
              </li>
            ))}
          </ul>

          <p className="more-block-label more-block-label--spaced">Interests</p>
          <ul className="tag-cloud">
            {interests.map((s) => (
              <li key={s} className="chip chip--outline">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

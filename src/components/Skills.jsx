import Reveal from "./Reveal";
import { skillCategories } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal as="p" className="eyebrow eyebrow--mono">
        [proc: skills]
      </Reveal>
      <Reveal as="h2" className="section-title">
        Skills &amp; Tools
      </Reveal>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.key} className="skills-card" delay={i * 70}>
            <p className="skills-card-label">{cat.label}</p>
            <ul className="tag-cloud">
              {cat.items.map((item) => (
                <li key={item} className="chip chip--cyan">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

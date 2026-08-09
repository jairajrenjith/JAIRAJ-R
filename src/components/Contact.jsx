import Reveal from "./Reveal";
import { socials, profile } from "../data";
import { GithubIcon, LinkedinIcon, MailIcon, InstagramIcon } from "./Icons";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="section section--contact">
      <Reveal as="p" className="eyebrow eyebrow--mono">
        [proc: contact]
      </Reveal>
      <Reveal as="h2" className="section-title">
        Let&rsquo;s build something
      </Reveal>
      <Reveal as="p" className="contact-copy" delay={80}>
        Open to internships, freelance builds, and interesting problems in AI/ML or web
        development. The fastest way to reach me is email.
      </Reveal>

      <Reveal className="social-row" delay={140}>
        <a href={`mailto:${socials.email}`} className="social-link">
          <MailIcon />
          <span>{socials.email}</span>
        </a>
        <a href={socials.github} target="_blank" rel="noopener noreferrer" className="social-link">
          <GithubIcon />
          <span>GitHub</span>
        </a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
          <LinkedinIcon />
          <span>LinkedIn</span>
        </a>
        <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
          <InstagramIcon />
          <span>Instagram</span>
        </a>
      </Reveal>

      <footer className="footer">
        <p>
          © {year} {profile.name}. Built with React &amp; Vite.
        </p>
      </footer>
    </section>
  );
}

import { useEffect, useState } from 'react'
import './App.css'
import profile from './assets/JR_Photo.jpg'

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaMoon,
  FaSun,
  FaFilePdf
} from 'react-icons/fa'

export default function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [expand, setExpand] = useState(false)
  const [contactOpen, setContactOpen] = useState(true)

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const t1 = setTimeout(() => setExpand(true), 1300)
    const t2 = setTimeout(() => setShowIntro(false), 3000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (showIntro) {
    return (
      <div className="intro-screen">
        <div className={`intro-text ${expand ? 'expand' : ''}`}>
          {expand ? 'JAIRAJ R' : 'JR'}
        </div>
      </div>
    )
  }

  return (
    <>
      <nav className="top-nav">
        <div className="nav-left">
          <span className="brand-mark"><a href='#'>&lt;jr&gt;</a></span>
        </div>

        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Connect</a>

          <span
            className="theme-btn"
            onClick={() =>
              setTheme(theme === 'light' ? 'dark' : 'light')
            }
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </span>
        </div>
      </nav>

      <div className="wrapper">

        <div className="section-box">
          <header className="header">
            <img src={profile} alt="Profile" className="avatar" />
            <div className="header-text">
              <div className="name">Jairaj R</div>
              <div className="role">
                Aspiring Software Engineer • Full-Stack & AI-Focused Developer
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-inline"
              >
                <FaFilePdf /> Resume
              </a>
            </div>
          </header>
        </div>

        <section id="overview" className="section-box">
          <div className="section-title">Overview</div>
          <p>
            Motivated B.Tech Computer Science student with strong interests
            in full-stack web development, artificial intelligence, and
            intelligent system design. Focused on building efficient,
            scalable, and user-centric software solutions while
            strengthening core computer science fundamentals.
          </p>
        </section>

        <section id="education" className="section-box">
          <div className="section-title">Education</div>
          <ul className="education-list">
            <li>
              <strong>B.Tech – Computer Science & Engineering</strong><br />
              College of Engineering Trivandrum (CET)<br />
              CGPA : 8.95 (until 2nd semester)<br />
              Status: Pursuing<br />
              Year of Graduation: 2028
            </li>
            <li>
              <strong>Senior Secondary (Class 12)</strong><br />
              MGM Central Public School<br />
              Percentage : 94.8%<br />
              Year of Passing: 2024
            </li>
            <li>
              <strong>Higher Secondary (Class 10)</strong><br />
              MGM Central Public School<br />
              Percentage : 95.4%<br />
              Year of Passing: 2022
            </li>
          </ul>
        </section>

        <section id="skills" className="section-box">
          <div className="section-title">Skills</div>

          <p><strong>Programming Languages</strong></p>
          <div className="skills">
            <span className="skill">Python</span>
            <span className="skill">C++</span>
            <span className="skill">C</span>
            <span className="skill">JavaScript</span>
            <span className="skill">Java</span>
            <span className="skill">SQL</span>
            <span className="skill">Bash</span>
          </div>

          <p style={{ marginTop: '1rem' }}><strong>Web & Frontend</strong></p>
          <div className="skills">
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">React</span>
          </div>

          <p style={{ marginTop: '1rem' }}><strong>AI / ML & Data</strong></p>
          <div className="skills">
            <span className="skill">TensorFlow</span>
            <span className="skill">Hugging Face</span>
            <span className="skill">OpenAI API</span>
            <span className="skill">Google AI Studio</span>
            <span className="skill">Machine Learning (Intro)</span>
          </div>

          <p style={{ marginTop: '1rem' }}><strong>Frameworks & Platforms</strong></p>
          <div className="skills">
            <span className="skill">Bolt.new</span>
            <span className="skill">AI Pipelines</span>
            <span className="skill">Model Prototyping</span>
            <span className="skill">Web Integrations</span>
          </div>

          <p style={{ marginTop: '1rem' }}><strong>Developer Tools</strong></p>
          <div className="skills">
            <span className="skill">VS Code</span>
            <span className="skill">Git</span>
            <span className="skill">GitHub</span>
            <span className="skill">SQLite</span>
            <span className="skill">API Testing</span>
            <span className="skill">LaTeX</span>
          </div>

          <p style={{ marginTop: '1rem' }}><strong>Core CS Areas</strong></p>
          <div className="skills">
            <span className="skill">Data Structures & Algorithms</span>
            <span className="skill">Problem Solving</span>
            <span className="skill">Computer Networks</span>
            <span className="skill">Cybersecurity Fundamentals</span>
          </div>

          <p style={{ marginTop: '1rem' }}><strong>Operating Systems</strong></p>
          <div className="skills">
            <span className="skill">Windows</span>
            <span className="skill">Linux</span>
          </div>

          <p style={{ marginTop: '1rem' }}><strong>Soft Skills</strong></p>
          <div className="skills">
            <span className="skill">Analytical Thinking</span>
            <span className="skill">Team Collaboration</span>
            <span className="skill">Adaptability</span>
            <span className="skill">Project Ownership</span>
          </div>
        </section>

        <section id="projects" className="section-box">
          <div className="section-title">Projects</div>
          <ul className="projects">
            <li>
              <a href="https://github.com/jairajrenjith/Semiconductor-Chatbot" className="project-title">
                Semiconductor Chatbot
              </a>{' '}
              – Natural-language querying of semiconductor datasheets
              using embeddings and LLMs.
            </li>
            <li>
              <a href="https://github.com/jairajrenjith/Line-Art-Generator" className="project-title">
                Line Art Generator
              </a>{' '}
              – OpenCV-based image processing tool for generating
              clean line art from images.
            </li>
            <li>
              <a href="https://github.com/jairajrenjith/Weather-App" className="project-title">
                Weather App
              </a>{' '}
              – Real-time weather application using serverless APIs.
            </li>
            <li>
              <a href="https://github.com/jairajrenjith/Motion-Detector" className="project-title">
                Motion Detector
              </a>{' '}
              – Computer vision-based movement detection project.
            </li>
            <li>
              <a href="https://github.com/jairajrenjith/IMDB-Movies-EDA" className="project-title">
                IMDB EDA Project
              </a>{' '}
              – Exploratory data analysis on movie datasets.
            </li>
          </ul>
        </section>

        <section id="journey" className="section-box">
          <div className="section-title">Journey</div>

          <p>
            Hackathons, technical sprints, competitive programming,
            mentoring juniors, and club-level technical contributions.
          </p>

          <h4>Professional Experience</h4>
          <p><em>Industry internships — coming soon...</em></p>

          <h4>Research & Innovation</h4>
          <p><em>Research projects and publications — coming soon...</em></p>

          <h4>Open Source & Community</h4>
          <p><em>Open-source contributions and leadership — coming soon...</em></p>

          <h4>Future Milestones</h4>
          <p><em>Major academic and career milestones — coming soon...</em></p>
        </section>

        <section id="contact" className="section-box">
          <div className="contact-box">
            <div
              className="contact-toggle"
              onClick={() => setContactOpen(!contactOpen)}
            >
              Connect With Me
            </div>

            {contactOpen && (
              <div className="contact-icons">
                <a href="https://github.com/jairajrenjith"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/jairaj-r-47a930333/"><FaLinkedin /></a>
                <a href="https://www.instagram.com/jairajrenjith_1019/"><FaInstagram /></a>
                <a href="mailto:jairajrenjith@gmail.com"><FaEnvelope /></a>
              </div>
            )}
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Jairaj R
        </footer>

      </div>
    </>
  )
}

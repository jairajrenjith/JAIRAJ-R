import { useState } from "react";
import "./index.css";
import "./App.css";

import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Freelance from "./components/Freelance";
import More from "./components/More";
import Contact from "./components/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <div className={`site ${loading ? "site--hidden" : "site--visible"}`}>
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Freelance />
          <More />
          <Contact />
        </main>
      </div>
    </>
  );
}

import React from "react";
// import { Link } from "react-scroll";
// import About from "./components/About";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Links from "./Links";

const Nav = () => {
  return (
    <div>
      <nav>
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#skills">skills</a>
        <a href="#contact">contact</a>
        <a href="#links">links</a>
      </nav>
      <section id="about">
        <article>
          <h2 className="sectionTitle">About</h2>
          <About />
        </article>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer id="links">
        <Links />
      </footer>
    </div>
  );
};

export default Nav;

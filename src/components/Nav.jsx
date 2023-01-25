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
      <section className="section" id="about">
        <h2 className="sectionTitle">About</h2>
        <About />
      </section>
      <section className="section" id="projects">
        <Projects />
      </section>
      <section className="section" id="skills">
        <Skills />
      </section>
      <section className="section" id="contact">
        <Contact />
      </section>
      <section className="section" id="links">
        <Links />
      </section>
    </div>
  );
};

export default Nav;

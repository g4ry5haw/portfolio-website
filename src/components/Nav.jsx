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
      <nav className="Nav">
        <ul>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
          <li>
            <a href="#links">links</a>
          </li>
        </ul>
      </nav>
      <section id="about">
        <About />
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

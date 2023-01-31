import React from "react";
// import { Link } from "react-scroll";
// import About from "./components/About";
// import About from "./About";
// import Projects from "./Projects";
// import Skills from "./Skills";
// import Contact from "./Contact";
// import Links from "./Links";
import Body from "./Body";
import "../App.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        {/* <a href="#contact">contact</a>
        <a href="#links">links</a> */}
      </nav>

      <Body />

      {/* <h2 className="sectionTitle" id="about">
        About
      </h2> */}
      {/* <About /> */}

      {/* <h2 className="sectionTitle" id="projects">
        Projects
      </h2> */}
      {/* <Projects /> */}

      {/* <h2 className="sectionTitle" id="skills">
        Skills
      </h2> */}
      {/* <Skills /> */}

      {/* <h2 className="sectionTitle" id="contact">
        Contact
      </h2> */}
      {/* <Contact /> */}

      {/* <h2 className="sectionTitle" id="links">
        Links
      </h2> */}
      {/* <Links /> */}
    </div>
  );
};

export default Nav;

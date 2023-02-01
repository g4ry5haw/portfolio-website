import React from "react";
import About from "./About";
import Projects from "./Projects";
// import Projects2 from "./Projects2";
import Skills from "./Skills";
import "../App.css";

const Body = () => {
  return (
    <div>
      <About />
      {/* <Projects /> */}
      <Projects />
      <Skills />
      {/* <Contact />
      <Links /> */}
    </div>
  );
};

export default Body;

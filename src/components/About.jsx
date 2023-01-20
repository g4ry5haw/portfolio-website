import React from "react";
import imageMe from "./assets/images/headshot.png";

const About = () => {
  return (
    <div className="about">
      <img src={imageMe} alt="Gary Shaw" className="headshot" />
    </div>
  );
};

export default About;

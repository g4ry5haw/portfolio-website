import React from "react";
import imageMe from "./assets/images/headshot.png";

const About = () => {
  return (
    <div className="content">
      <div className="even-columns">
        <div className="col">
          <p>
            Hi. My name is Gary Shaw
            <br />
            This is my portfolio website
            <br />
            Feel free to look around 🙂
          </p>
          {/* <p>Hi. My name is Gary Shaw</p>
          <p>This is my portfolio website</p>
          <p>Feel free to look around 🙂</p> */}
        </div>
        <div className="col">
          <img src={imageMe} alt="Gary Shaw" className="headshot" />
        </div>
      </div>
    </div>
  );
};

export default About;

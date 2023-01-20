import React from "react";
import imageMe from "./assets/images/headshot.png";

const About = () => {
  return (
    <div>
      {/* <div> */}
      <p>About me</p>
      {/* </div> */}
      <div className="about">
        <img src={imageMe} alt="Gary Shaw" className="headshot" />

        <span>
          <p>
            Hi. My name is Gary Shaw
            <br />
            This is my portfolio website
            <br />
            Feel free to look around 🙂
          </p>
        </span>
      </div>
    </div>
  );
};

export default About;

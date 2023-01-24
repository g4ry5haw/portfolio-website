import React from "react";
import imageMe from "./assets/images/headshot.png";

const About = () => {
  return (
    <div className="content">
      <div className="even-columns">
        <div class="col">
          {/* <h2 className="sectionTitle">About</h2> */}
          <p>
            Hi. My name is Gary Shaw
            <br />
            This is my portfolio website
            <br />
            Feel free to look around 🙂
          </p>
          <img src={imageMe} alt="Gary Shaw" className="headshot" />
        </div>
      </div>
    </div>
  );
};

export default About;

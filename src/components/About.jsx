import React from "react";
import imageMe from "./assets/images/headshot.jpeg";
import "../App.css";

const About = () => {
  return (
    <div className="content">
      <h2 className="sectionTitle" id="about">
        About
      </h2>
      <div className="even-columns-flex">
        <div className="col-30">
          <img src={imageMe} alt="Gary Shaw" className="headshot" />
        </div>
        <div className="col-70">
          <div className="col-text-left">
            <p>
              Hi. I'm Gary Shaw.
              <br />
              <br />I love all things software, gadgets, dogs 🐶 and my family
              🥰
            </p>
            <br />
            <p>
              This is my portfolio website where I'll be adding the projects I
              have worked on so far. It's a work in progress but feel free to
              look around 🙂
              <br />
              <br />
              I completed the Northcoders full-stack software engineering
              bootcamp in January 2023 and prior to that I worked with
              enterprise software in pre-sales and post-sales.
              <br />
              <br />
              That has given me great experience across the whole software
              lifecycle from design & development through to sales,
              implementation & support.
              <br />
              <br />
              I'm looking for a role where I can combine my love of working with
              software and also helping people to use and benefit from it
              themselves.
              <br />
              <br />
              Feel free to get in touch using the links at the bottom of the
              page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

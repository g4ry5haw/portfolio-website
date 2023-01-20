import React from "react";
import bufferImage from "./assets/images/buffer-post-generator.png";
import githubLogo from "./assets/images/github-mark.png";
import internetLogo from "./assets/images/internet.png";
// import IconButton from "@mui/material/IconButton";
// import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  return (
    <div>
      <div>
        <p>Projects</p>
        <p>This is a sample</p>
      </div>
      <div className="projects">
        <ul className="projects-list">
          <li>
            <p>Buffer Post Generator</p>
            <img
              src={bufferImage}
              alt="buffer post generator"
              className="bufferImage"
            />
            <br />
            <img src={githubLogo} alt="github logo" className="projectLogo" />
            <img
              src={internetLogo}
              alt="internet logo"
              className="projectLogo"
            />
          </li>
          <li>
            <p>Barbershop Appointment Booking </p>
            <img
              src={bufferImage}
              alt="buffer post generator"
              className="bufferImage"
            />
            <br />
            <img src={githubLogo} alt="github logo" className="projectLogo" />
            <img src={githubLogo} alt="github logo" className="projectLogo" />
            <img src={githubLogo} alt="github logo" className="projectLogo" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import bufferImage from "./assets/images/buffer-post-generator.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const Projects = () => {
  return (
    <div className="content">
      <h2 className="sectionTitle">Projects</h2>
      <div className="even-columns">
        <div className="col">
          <h5>Buffer Post Generator</h5>
          <img
            src={bufferImage}
            alt="buffer post generator"
            className="bufferImage"
          />
          <br />
          <GitHubIcon fontSize="large" />
          <LanguageIcon fontSize="large" />
        </div>
        <div className="col">
          <h5>Barbershop Appointment Booking </h5>
          <img
            src={bufferImage}
            alt="buffer post generator"
            className="bufferImage"
          />
          <br />
          <GitHubIcon fontSize="large" />
          <LanguageIcon fontSize="large" />
        </div>
        {/* <div className="col"></div> */}
      </div>
    </div>
  );
};

export default Projects;

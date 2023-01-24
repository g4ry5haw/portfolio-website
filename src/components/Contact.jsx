import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <div className="content">
      <h2 className="sectionTitle">Contact & Links</h2>
      <div className="even-columns">
        <div class="col">
          <CallIcon /> 07467 945221
          <br />
          <div
            onClick={(e) => {
              window.location.href = "mailto:gary.shaw@gmx.co.uk";
            }}
          >
            <EmailIcon /> gary.shaw@gmx.co.uk
          </div>
        </div>
        <div class="col">
          <div
            onClick={(e) => {
              window.open("https://github.com/g4ry5haw", "_blank");
            }}
          >
            <GitHubIcon fontSize="large" /> g4ry5haw
          </div>
          <div
            onClick={(e) => {
              window.open(
                "https://www.linkedin.com/in/gary-shaw-a9b35514/",
                "_blank"
              );
            }}
          >
            <LinkedInIcon fontSize="large" /> LinkedIn profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

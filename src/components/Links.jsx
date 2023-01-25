import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Links = () => {
  return (
    <div className="content">
      <h2 className="sectionTitle">Links</h2>
      <div className="even-columns">
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

export default Links;

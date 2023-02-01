import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div class="footer">
      <div className="col">
        <CallIcon fontSize="large" className="icon" /> 07467 945221
      </div>
      <div className="col">
        <EmailIcon
          fontSize="large"
          className="icon"
          onClick={(e) => {
            window.location.href = "mailto:gary.shaw@gmx.co.uk";
          }}
        />{" "}
        {/* gary.shaw@gmx.co.uk */}
      </div>
      <div class="col">
        <GitHubIcon
          fontSize="large"
          onClick={(e) => {
            window.open("https://github.com/g4ry5haw", "_blank");
          }}
        />{" "}
        {/* g4ry5haw */}
      </div>
      <div class="col">
        <LinkedInIcon
          fontSize="large"
          onClick={(e) => {
            window.open(
              "https://www.linkedin.com/in/gary-shaw-a9b35514/",
              "_blank"
            );
          }}
        />{" "}
        {/* LinkedIn */}
      </div>
    </div>
  );
};

export default Footer;

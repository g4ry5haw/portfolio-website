import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <div className="content">
      <h2 className="sectionTitle">Contact Details</h2>
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
      </div>
    </div>
  );
};

export default Contact;

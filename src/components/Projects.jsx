import React from "react";
import barbershop from "./assets/images/barbershop.png";
import bufferImage from "./assets/images/buffer-post-generator.png";
import aspire from "./assets/images/aspire.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

const Projects = () => {
  return (
    <div className="content">
      <h2 className="sectionTitle" id="projects">
        Projects
      </h2>
      <div className="grid-outer">
        <div className="grid-inner">
          <h3 className="col-title">Barbershop Appointment Booking </h3>

          <img
            src={barbershop}
            alt="barbershop booking app"
            className="image-project"
          />

          <p className="p-project-description">
            An app built for browsing, booking and paying for appointments with
            your local barber
          </p>
          <br />
          <p className="p-project-techstack">
            Front-end is built in React Native & Back-end is built in MongoDB.
            REST API's were created using Express.
          </p>
          <div className="project-icons">
            <OndemandVideoIcon
              fontSize="large"
              className="logo"
              onClick={(e) => {
                window.open("https://youtube.com/shorts/VMrwm9RRqfY", "_blank");
              }}
            />
            <GitHubIcon
              fontSize="large"
              className="logo"
              onClick={(e) => {
                window.open(
                  "https://github.com/g4ry5haw/FE-barbershop-booking",
                  "_blank"
                );
              }}
            />
          </div>
        </div>
        <div className="grid-inner">
          <h3 className="col-title">Buffer Post Generator </h3>
          <img
            src={bufferImage}
            alt="barbershop booking app"
            // className="image-project"
          />
          <p className="p-project-description">
            A simple one-page site built in React to create consistent social
            media posts that can be posted across channels using Buffer
          </p>
          <br />
          <p className="p-project-techstack">Built in React</p>
          <div className="project-icons">
            <OndemandVideoIcon
              fontSize="large"
              className="logo"
              onClick={(e) => {
                window.open("https://youtu.be/5Ucv4xjZV58", "_blank");
              }}
            />
            <GitHubIcon
              fontSize="large"
              className="logo"
              onClick={(e) => {
                window.open(
                  "https://github.com/g4ry5haw/buffer-post-generator",
                  "_blank"
                );
              }}
            />
            <LanguageIcon
              fontSize="large"
              className="logo"
              onClick={(e) => {
                window.open(
                  "https://main--glistening-flan-a9f419.netlify.app/",
                  "_blank"
                );
              }}
            />
          </div>
        </div>

        <div className="grid-inner">
          <h3 className="col-title">Aspire Languages Website</h3>
          <img
            src={aspire}
            alt="asprie languages website"
            // className="image-project"
          />
          <p className="p-project-description">
            My first website built using no-code tools before I knew how to code
            🙂
          </p>
          <br />
          <p className="p-project-techstack">
            Built using{" "}
            <a
              href="https://carrd.co"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Carrd
            </a>
          </p>
          <div className="project-icons">
            <LanguageIcon
              fontSize="large"
              className="logo"
              onClick={(e) => {
                window.open("https://aspirelanguages.com", "_blank");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

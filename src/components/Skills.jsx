import React from "react";

const Skills = () => {
  return (
    <div className="content">
      <h2 className="sectionTitle">Skills</h2>
      <div className="even-columns">
        <div class="col">
          <h3>front end</h3>
          <ul className="skillList">
            <li className="skillListItem">React</li>
            <li className="skillListItem">React Native</li>
            <li className="skillListItem">HTML5</li>
            <li className="skillListItem">CSS</li>
          </ul>
        </div>
        <div class="col">
          <h3>back end</h3>
          <ul className="skillList">
            <li className="skillListItem">node.js</li>
            <li className="skillListItem">PostgreSQL</li>
            <li className="skillListItem">MongoDB</li>
            <li className="skillListItem">Express</li>
          </ul>
        </div>

        <div class="col">
          <h3>fundamentals</h3>
          <ul className="skillList">
            <li className="skillListItem">test driven development</li>
            <li className="skillListItem">Git version control</li>
            <li className="skillListItem">pair programming</li>
            <li className="skillListItem">object-oriented programming</li>
          </ul>
        </div>
        {/* <div class="col"></div>
        <div class="col"></div> */}
      </div>
    </div>
  );
};

export default Skills;

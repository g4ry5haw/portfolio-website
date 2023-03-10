import React from "react";

const Skills = () => {
  return (
    <div className="content">
      <h2 className="sectionTitle" id="skills">
        Skills
      </h2>
      <div className="grid-outer">
        <div className="col">
          <div className="col-box">
            <h3 className="col-title">Front end</h3>
            <ul className="skillList">
              <li className="skillListItem">React</li>
              <li className="skillListItem">React Native</li>
              <li className="skillListItem">HTML5</li>
              <li className="skillListItem">CSS</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="col-box">
            <h3 className="col-title">Back end</h3>
            <ul className="skillList">
              <li className="skillListItem">Node.js</li>
              <li className="skillListItem">PostgreSQL</li>
              <li className="skillListItem">MongoDB</li>
              <li className="skillListItem">Express</li>
            </ul>
          </div>
        </div>

        <div className="col">
          <div className="col-box">
            <h3 className="col-title">Fundamentals</h3>
            <ul className="skillList">
              <li className="skillListItem">Test Driven Development</li>
              <li className="skillListItem">Git version control</li>
              <li className="skillListItem">Pair programming</li>
              <li className="skillListItem">Object-oriented programming</li>
            </ul>
          </div>
        </div>
        {/* <div class="col"></div>
        <div class="col"></div> */}
      </div>
    </div>
  );
};

export default Skills;

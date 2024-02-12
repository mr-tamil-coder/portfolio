import React, { useState } from "react";
import html5Logo from "./assets/images/html5.png";
import css3Logo from "./assets/images/css3.png";
import javascriptLogo from "./assets/images/javascript.png";
import jqueryLogo from "./assets/images/jquery.png";
import bootstrapLogo from "./assets/images/bootstrap.png";
import reactLogo from "./assets/images/react.png";
import tailwindLogo from "./assets/images/tailiwnd.png";
import ajaxLogo from "./assets/images/ajax.png";
import gulpLogo from "./assets/images/gulp.png";
import webpackLogo from "./assets/images/webpack.png";
import gitLogo from "./assets/images/git.png";
import npmLogo from "./assets/images/npm.png";
import commandLogo from "./assets/images/command.png";
import vsCodeLogo from "./assets/images/vs-code.png";
import trelloLogo from "./assets/images/trello.png";
import clickupLogo from "./assets/images/clickup.png";
import slackLogo from "./assets/images/slack.png";
import photoshopLogo from "./assets/images/photoshop.png";
import adobeXdLogo from "./assets/images/adobe-xd.png";

function Skills() {
  const [activeSection, setActiveSection] = useState("skills");

  const skillsData = [
    { name: "HTML5", icon: html5Logo, type: "skill" },
    { name: "CSS3", icon: css3Logo, type: "skill" },
    { name: "JavaScript", icon: javascriptLogo, type: "skill" },
    { name: "jQuery", icon: jqueryLogo, type: "skill" },
    { name: "Bootstrap", icon: bootstrapLogo, type: "skill" },
    { name: "tailwind", icon: tailwindLogo, type: "skill" },
    { name: "React", icon: reactLogo, type: "skill" },
  ];

  const toolsData = [
    { name: "Ajax", icon: ajaxLogo, type: "tool" },
    { name: "Gulp", icon: gulpLogo, type: "tool" },
    { name: "Webpack", icon: webpackLogo, type: "tool" },
    { name: "Git", icon: gitLogo, type: "tool" },
    { name: "Npm", icon: npmLogo, type: "tool" },
    { name: "Command Line", icon: commandLogo, type: "tool" },
    { name: "VS Code", icon: vsCodeLogo, type: "tool" },
    { name: "Trello", icon: trelloLogo, type: "tool" },
    { name: "ClickUp", icon: clickupLogo, type: "tool" },
    { name: "Slack", icon: slackLogo, type: "tool" },
    { name: "Photoshop", icon: photoshopLogo, type: "tool" },
    { name: "Adobe XD", icon: adobeXdLogo, type: "tool" },
  ];

  const handleToggle = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };
  

  return (
    <section className="skills" id="skills">
      <div className="skills-content section-content">
        <p className="section-subtitle">My skills</p>
        <h2 className="h3 section-title">
          What My Programming Skills Included?
        </h2>
        <p className="section-text">
          I develop simple, intuitive and responsive user interfaces that help
          users get things done with less effort and time using those
          technologies.
        </p>
        <div className={`skills-toggle ${activeSection === "tools" ? "active" : ""} `} data-toggle-box>
          <button
            className={`toggle-btn ${activeSection === "skills" ? "active" : ""}`}
            data-toggle-btn
            onClick={() => handleToggle("skills")}
          >
            Skills
          </button>
          <button
            className={`toggle-btn ${activeSection === "tools" ? "active" : ""}`}
            data-toggle-btn
            onClick={() => handleToggle("tools")}
          >
            Tools
          </button>
        </div>
      </div>
      <div className={`skills-box ${activeSection === "tools" ? "active" : ""}`} data-skills-box>
        <ul className="skills-list">
          {skillsData.map((skill, index) => (
            <li key={index}>
              <div className="skill-card">
                <div className="tooltip">{skill.name}</div>
                <div className="card-icon">
                  <img src={skill.icon} alt={`${skill.name} logo`} />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul className={`tools-list ${activeSection === "skills" ? "active" : ""}`}>
  {activeSection === "tools" &&
    toolsData.map((tool, index) => (
      <li key={index}>
        <div className="skill-card">
          <div className="tooltip">{tool.name}</div>
          <div className="card-icon">
            <img src={tool.icon} alt={`${tool.name} logo`} />
          </div>
        </div>
      </li>
    ))}
</ul>

         
        
      </div>
    </section>
  );
}

export default Skills;

import React from "react";
import Card from "./Card.js";
// Projects Information
import { projectsData } from "./data/projectsData.js";
//Icons
const Projects = (props) => {
  return (
    // Mapp Over Project Data and Generate Card Components
    <div className="wrapper projects is-desktop">
      {projectsData.map((project) => (
        <Card project={project} key={Math.random()} darkMode={props.darkMode} />
      ))}
    </div>
  );
};

export default Projects;

import React from "react";

// Component Imports
import Skills from "../About/Skills.js";
import Cube from "../About/Cube.js";

const ParallaxSection = ({ darkMode }) => {
  return (
    <section className="section-parallax">
      <div className="content">
        <div className="box">
          <Cube />
        </div>
        <div className="skills-wrapper">
          <Skills darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;

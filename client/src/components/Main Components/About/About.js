import React, { useState } from "react";
//components
import Timeline from "./Timeline.js";
import Cube from "./Cube.js";
import Skills from "./Skills.js";

const About = ({ darkMode }) => {
  return (
    <div className="wrapper about is-desktop is-family-monospace">
      <div className={darkMode ? "box has-text-white" : "box has-text-dark"}>
        <div className="about">
          <h1 className="is-size-3 is-family-monospace">About Me</h1>
          <p>
            My name is Alexis Davalos, I am a Full-Stack Developer with a
            passion for constantly learning and pushing the boundaries of my
            understanding. I am passionate about philosophy, language,
            technology and wellness/fitness. I am fascinated by life and our
            ability to share our stories with one another.
          </p>
          <Skills darkMode={darkMode} />
        </div>
        <Timeline darkMode={darkMode} />
      </div>
      <div
        className={
          darkMode
            ? "box w-30 has-text-white is-desktop"
            : "box w-30 has-text-dark is-desktop"
        }
      >
        <Cube />
      </div>
    </div>
  );
};

export default About;

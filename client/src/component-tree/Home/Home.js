import React from "react";

// images
import logo from "../../assetts/images/logo.png";
import lightLogo from "../../assetts/images/logo-light.png";
import mk3 from "../../assetts/images/mk-3.png";

// components
import Cube from "../About/Cube.js";
import Particles from "react-particles-js";
import Timeline from "../About/Timeline.js";
// import Timeline from "../About/Timeline.js";
import Typed from "react-typed";
import Projects from "../Projects/Projects.js";
import Skills from "../About/Skills.js";

// icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// particle configs
import setUpConfig from "./config/particleConfig.js";

const Home = ({ darkMode }) => {
  // Props Validation
  console.log(darkMode);
  // Dynamically change color of particles
  const configDark = setUpConfig("#ffffff");
  const configLight = setUpConfig("#000000");
  return (
    <>
      <div className="wrapper hue-rotate">
        <section
          className={darkMode ? "center-section dark" : "center-section light"}
        >
          <div className="container">
            <img src={darkMode ? lightLogo : logo} alt="logo" />
            <h2 className="is-size-1 has-text-weight-medium is-family-monospace ">
              I am
              <Typed
                strings={[
                  `a Fullstack Developer`,
                  `a Graphic Designer`,
                  `an Eternal Student`,
                ]}
                typeSpeed={80}
                backSpeed={75}
                loop
              />
            </h2>
            <h3 className="is-family-monospace is-size-4">
              with a passion for learning constantly and pushing the boundaries
              of my understanding.
            </h3>
            <div className="social-icons is-flex">
              <a href="https://github.com/alexisdavalos" target="_empty">
                <FaGithub size="3em" />
              </a>
              <a href="https://linkedin.com/in/alexisdavalos" target="_empty">
                <FaLinkedin size="3em" />
              </a>
              <a href="https://twitter.com/digitalnomadjs" target="_empty">
                <FaTwitter size="3em" />
              </a>
            </div>
          </div>
        </section>
        {/* Particles Component */}
        {darkMode ? (
          <Particles className="particles isDark" params={configDark} />
        ) : (
          <Particles className="particles isLight" params={configLight} />
        )}
        {/* Particles Component End */}
      </div>
      {/* About Section */}
      <section className={darkMode ? "about-section is-dark" : "about-section"}>
        <div className="content left hue-rotate">
          <img className="img" src={mk3} alt="mk-3" />
          <h3 className="is-family-monospace">About Me</h3>
        </div>
        <div className="content right">
          <Timeline />
        </div>
      </section>
      {/* Parallax Section */}
      <section className="section-parallax">
        <div className="content">
          <div className="box">
            <Cube />
          </div>
          <div>
            <Skills darkMode={darkMode} />
          </div>
        </div>
      </section>
      {/* Parallax Section End */}
      <Projects darkMode={darkMode} />
      <div
        className="has-background-black footer"
        style={{ width: "100%", padding: "2%" }}
      >
        <p>Copyright © 2020 | Alexis Davalos</p>
      </div>
    </>
  );
};

export default Home;

import React, { lazy, Suspense } from "react";
import Typed from "react-typed";

// Particles Component
import Particles from "react-particles-js";

// Particle Config Function
import setUpConfig from "./particle-config/particleConfig.js";

// Images
import logo from "../../assetts/images/logo.png";
import lightLogo from "../../assetts/images/logo-light.png";

// Icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Lazy Load Sections
const AboutSection = lazy(() => import("./AboutSection.js"));
const Projects = lazy(() => import("../Projects/Projects.js"));
const Footer = lazy(() => import("../Footer/Footer.js"));
const ParallaxSection = lazy(() => import("./ParallaxSection.js"));

// Dynamically change color of particles
const configDark = setUpConfig("#ffffff");
const configLight = setUpConfig("#000000");

const Home = ({ darkMode }) => {
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
      <Suspense fallback={<div>Loading...</div>}>
        {/* About Section */}
        <AboutSection darkMode={darkMode} />
        {/* Parallax Section */}
        <ParallaxSection darkMode={darkMode} />
        {/* Projects Section */}
        <Projects darkMode={darkMode} />
        {/* Footer Section */}
        <Footer darkMode={darkMode} />
      </Suspense>
    </>
  );
};

export default Home;

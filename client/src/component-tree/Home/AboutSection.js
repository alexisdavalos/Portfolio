import React, { useState } from "react";
import AboutModal from "../About/AboutModal.js";

// images
import mk3 from "../../assetts/images/mk-3.png";

const AboutSection = ({ darkMode }) => {
  // Popup Modal Toggle
  const [toggle, setToggle] = useState(false);
  // Scroll To Projects Section and Toggle Modal
  const viewProjects = () => {
    // Select Projects Element
    let projects = document.querySelector(".projects");
    // Toggle Modal
    setToggle(!toggle);
    // Scroll To Projects
    projects.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={darkMode ? "about-section is-dark" : "about-section"}>
      <AboutModal
        toggle={toggle}
        setToggle={setToggle}
        darkMode={darkMode}
        viewProjects={viewProjects}
      />
      <div className="content full hue-rotate">
        {/* Image Component */}
        <img
          className="img"
          src={mk3}
          onClick={() => setToggle(!toggle)}
          alt="layered screens design"
        />
        {/* Overlayed Subtitle <h3> */}
        <h3 onClick={() => setToggle(!toggle)}>About Me</h3>
      </div>
    </section>
  );
};

export default AboutSection;

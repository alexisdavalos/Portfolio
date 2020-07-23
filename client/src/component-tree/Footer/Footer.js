import React from "react";
// icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = ({ darkMode }) => {
  return (
    <footer
      className={
        darkMode ? "has-background-black footer" : "has-background-light footer"
      }
      style={{ width: "100%", padding: "2%" }}
    >
      <div className="container is narrow">
        <h2
          className={
            darkMode
              ? "title is-size-5 has-text-light is-family-monospace"
              : "title is-size-5 has-text-dark is-family-monospace"
          }
        >
          "Discipline is nothing more but the habit of consistency"
        </h2>
        <div className="social-icons is-centered">
          <a href="https://github.com/alexisdavalos" target="_empty">
            <FaGithub color={darkMode ? "white" : "#333"} size="3em" />
          </a>
          <a href="https://linkedin.com/in/alexisdavalos" target="_empty">
            <FaLinkedin color={darkMode ? "white" : "#333"} size="3em" />
          </a>
          <a href="https://twitter.com/digitalnomadjs" target="_empty">
            <FaTwitter color={darkMode ? "white" : "#333"} size="3em" />
          </a>
        </div>
        <p
          className={
            darkMode
              ? "has-text-light is-family-monospace"
              : "has-text-dark is-family-monospace"
          }
        >
          Copyright © 2020 | Alexis Davalos
        </p>
      </div>
    </footer>
  );
};

export default Footer;

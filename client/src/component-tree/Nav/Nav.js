import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import Icons From Library
import { FaGrav, FaGreaterThanEqual, FaSun, FaMoon } from "react-icons/fa/";
// Import Images from assetts
import navLogoDark from "../../assetts/images/nav-logo.png";
import navLogoLight from "../../assetts/images/nav-logo-light.png";
// Import Resume
import resume from "../../assetts/portfolio/Alexis_Davalos_Resume.pdf";

const Nav = ({ darkMode, setDarkMode }) => {
  // State and Class Variables Initialization
  const [mobileNav, setMobileNav] = useState(false);
  let darkModeButtonColor = darkMode ? "white" : "#333";
  let logo = darkMode ? navLogoLight : navLogoDark;
  let textClass = darkMode ? "has-text-dark" : "has-text-light";
  let navbarClass = darkMode ? "navbar is-dark" : "navbar is-light";
  let mobileNavClass = darkMode
    ? "navbar-menu is-active has-background-light"
    : "navbar-menu is-active has-background-dark";
  let navBarItemClass = darkMode
    ? "navbar-item has-text-dark"
    : "navbar-item has-text-light";
  let roundButtonClass = darkMode
    ? "button is-white is-rounded"
    : "button is-dark is-rounded";

  // Toggle Burger Menu Logic
  const mobileToggle = () => {
    let mobileMenu = document.querySelector(".navbar-burger");
    // Check state of Mobile Menu
    if (mobileNav) {
      mobileMenu.classList.remove("is-active");
    } else {
      mobileMenu.classList.add("is-active");
    }
    // Toggle Mobile Nav Component
    setMobileNav(!mobileNav);
  };
  // Smooth Scroll Logic
  const scrollToSection = (query) => {
    //Check if Mobile
    if (mobileNav) {
      setMobileNav(false);
    }
    // Select Projects Element
    let section = document.querySelector(query);
    // Scroll To Projects
    section.scrollIntoView({ block: "center", behavior: "smooth" });
  };
  return (
    <nav className={navbarClass} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link
          onClick={() => scrollToSection(".center-section")}
          to="/"
          className="navbar-item"
        >
          <img src={logo} alt="logo" />
        </Link>

        <Link
          to="/"
          onClick={() => mobileToggle()}
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded={mobileNav ? "true" : "false"}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>
      {!mobileNav ? (
        // Desktop & Mobile Turnary Component
        <div className="navbar-menu is-family-monospace">
          <div className="navbar-start">
            <Link
              onClick={() => {
                scrollToSection(".about-section");
              }}
              to="/"
              className="navbar-item"
            >
              <FaGrav size="2em" />
              <span className="typed-cursor typed-cursor--blink">|</span>
              <span>About</span>
            </Link>
            <Link
              onClick={() => scrollToSection(".projects")}
              to="/"
              className="navbar-item"
            >
              <FaGreaterThanEqual size="2em" />
              <span className="typed-cursor typed-cursor--blink">|</span>
              <span>Projects</span>
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link
                onClick={() => setDarkMode(!darkMode)}
                to="/"
                className="dark-mode-toggle"
              >
                {darkMode ? (
                  <FaMoon color={darkModeButtonColor} size="1.5em" />
                ) : (
                  <FaSun color={darkModeButtonColor} size="1.5em" />
                )}
              </Link>
            </div>
            <div className="navbar-item">
              <Link href={resume} className={roundButtonClass} download>
                <strong>Resume</strong>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // Mobile Nav Bar
        <div className={mobileNavClass} id="navMenu">
          <Link
            onClick={() => scrollToSection(".center-section")}
            to="/"
            className={navBarItemClass}
          >
            <span>Home</span>
          </Link>
          <Link
            onClick={() => scrollToSection(".about-section")}
            to="/"
            className={navBarItemClass}
          >
            <span>About</span>
          </Link>
          <Link
            onClick={() => scrollToSection(".projects")}
            to="/"
            className={navBarItemClass}
          >
            <span>Projects</span>
          </Link>
          {mobileNav ? (
            <div className="field switch-wrapper hidden-desktop">
              <input
                onClick={() => setDarkMode(!darkMode)}
                id="switchThinColorDefault"
                type="checkbox"
                className="switch is-black is-rounded"
                defaultChecked={darkMode ? true : false}
              />
              <label htmlFor="switchThinColorDefault">
                <b className={textClass}>
                  {darkMode ? "DarkMode: ON" : "DarkMode: OFF"}
                </b>
              </label>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </nav>
  );
};
export default Nav;

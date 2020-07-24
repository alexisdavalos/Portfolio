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
  const [mobileNav, setMobileNav] = useState(false);
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
    <nav
      className={darkMode === true ? "navbar is-dark" : "navbar is-light"}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link
          onClick={() => scrollToSection(".center-section")}
          to="/"
          className="navbar-item"
        >
          <img src={!darkMode ? navLogoDark : navLogoLight} alt="logo" />
        </Link>

        <Link
          to="/"
          onClick={() => setMobileNav(!mobileNav)}
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
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

            {/* <div className="navbar-item has-dropdown is-hoverable">
							<Link to="#top" className="navbar-link">
								<span className="typed-cursor typed-cursor--blink">|</span>More
							</Link>

							<div className="navbar-dropdown">
								<Link to="#top" className="navbar-item">
									Contact
								</Link>
								<hr className="navbar-divider" />
								<Link to="#top" className="navbar-item">
									Report an issue
								</Link>
							</div>
						</div> */}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="field switch-wrapper">
                  <input
                    onClick={() => setDarkMode(!darkMode)}
                    id="switchThinColorDefault"
                    type="checkbox"
                    className="switch is-black is-rounded"
                    defaultChecked={darkMode ? true : false}
                  />
                  <label htmlFor="switchThinColorDefault">
                    <b>
                      {darkMode ? <FaMoon size="1em" /> : <FaSun size="1em" />}
                    </b>
                  </label>
                </div>
                <a
                  href={resume}
                  className={
                    darkMode
                      ? "button is-white is-rounded"
                      : "button is-black is-rounded"
                  }
                  download
                >
                  <strong>Resume</strong>
                </a>
                {/* <Link
									to="#top"
									className={
										darkMode
											? "button is-light is-rounded is-outlined"
											: "button is-dark is-rounded is-outlined"
									}
								>
									Contact
								</Link> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Mobile Nav Bar

        <div
          className={
            darkMode
              ? "navbar-menu is-active has-background-light"
              : "navbar-menu is-active has-background-dark"
          }
          id="navMenu"
        >
          <Link
            onClick={() => scrollToSection(".center-section")}
            to="/"
            className={
              darkMode
                ? "navbar-item has-text-dark"
                : "navbar-item has-text-light"
            }
          >
            <span>Home</span>
          </Link>
          <Link
            onClick={() => scrollToSection(".about-section")}
            to="/"
            className={
              darkMode
                ? "navbar-item has-text-dark"
                : "navbar-item has-text-light"
            }
          >
            <span>About</span>
          </Link>
          <Link
            onClick={() => scrollToSection(".projects")}
            to="/"
            className={
              darkMode
                ? "navbar-item has-text-dark"
                : "navbar-item has-text-light"
            }
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
                <b className={darkMode ? "has-text-dark" : "has-text-light"}>
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

import React from 'react';
import navLogoDark from '../../assetts/images/nav-logo.png'
import navLogoLight from '../../assetts/images/nav-logo-light.png'
// Icons
import {
    FaGrav,
    FaGreaterThanEqual,
    FaHome,
    FaSun,
    FaMoon
} from 'react-icons/fa/'

const Nav = ({darkMode, setDarkMode}) => {
    return (
        <nav className={(darkMode === true) ? "navbar is-dark" : "navbar is-light"} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href='/' className="navbar-item">
                    <img src={(!darkMode) ? navLogoDark : navLogoLight} alt='logo' />
                </a>

                <a href='#top' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu is-family-monospace">
                <div className="navbar-start">
                    <a href='#top' className="navbar-item" ><FaHome size="2em"/><span>Home</span></a>
                    <a href='#top' className="navbar-item"><FaGrav  size="2em"/><span>About</span></a>
                    <a href='#top' className="navbar-item"><FaGreaterThanEqual size="2em"/><span>Projects</span></a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a href='#top' className="navbar-link">More</a>

                        <div className="navbar-dropdown" >
                            <a href='#top' className="navbar-item">Blog</a>
                            <a href='#top' className="navbar-item">Social Media</a>
                            <a href='#top' className="navbar-item">Contact</a>
                            <hr className="navbar-divider" />
                            <a href='#top' className="navbar-item">Report an issue</a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <div className="field switch-wrapper">
                            <input onClick={() => setDarkMode(!darkMode)} id="switchThinColorDefault" type="checkbox" className="switch is-black is-rounded" defaultChecked={(darkMode) ? true : false}/> 
                            <label htmlFor="switchThinColorDefault"><b>{(darkMode) ? <FaMoon size="1em"/> : <FaSun size="1em"/>}</b></label>
                        </div>
                        <a href='#top' className={darkMode ? "button is-white is-rounded" : "button is-black is-rounded"}><strong>Resume</strong></a>
                        <a href='#top' className={darkMode ? "button is-light is-rounded is-outlined" : "button is-dark is-rounded is-outlined"}>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

}
export default Nav;
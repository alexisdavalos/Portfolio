import React from 'react';
import navLogoDark from '../../assetts/images/nav-logo.png'
import navLogoLight from '../../assetts/images/nav-logo-light.png'

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

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a href='#top' className="navbar-item" >Home</a>
                    <a href='#top' className="navbar-item">About Me</a>
                    <a href='#top' className="navbar-item">Projects</a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a href='#top' className="navbar-link">More</a>

                        <div className="navbar-dropdown">
                            <a href='#top' className="navbar-item">About</a>
                            <a href='#top' className="navbar-item">Jobs</a>
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
                            <input onClick={() => setDarkMode(!darkMode)} id="switchThinColorDefault" type="checkbox" className="switch is-black" defaultChecked={(darkMode) ? true : false}/> 
                            <label htmlFor="switchThinColorDefault"><b>Dark Mode: {(darkMode) ? "ON " : "OFF"}</b></label>
                        </div>
                        <a href='#top' className="button is-black"><strong>Resume</strong></a>
                        <a href='#top' className="button is-light">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

}
export default Nav;
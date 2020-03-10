import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import navLogoDark from '../assetts/images/nav-logo.png'
import navLogoLight from '../assetts/images/nav-logo-light.png'


const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode('darkmode', true)
    console.log(darkMode);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href='/' className="navbar-item">
                    <img src={((darkMode === true) || (window.localStorage.getItem('darkmode') === true)) ? navLogoLight : navLogoDark} alt='logo' />
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
                        <a href='#top' className="button is-black"><strong>Sign up</strong></a>
                        <a href='#top' className="button is-light">Log in</a>
                            <div className="field">
                                {
                                    (darkMode) ? 
                                    <input onClick={() => setDarkMode(!darkMode)} id="switchThinColorDefault" type="checkbox" name="switchThinColorDefault" className="switch is-black" defaultChecked/> :
                                    <input onClick={() => setDarkMode(!darkMode)} id="switchThinColorDefault" type="checkbox" name="switchThinColorDefault" className="switch" /> 

                                }
                                <label htmlFor="switchThinColorDefault"><b>Dark Mode</b></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

}
export default Nav;
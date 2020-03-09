import React from 'react';
import navlogo from '../assetts/images/nav-logo.png'
const Nav = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a href='/' className="navbar-item">
                    <img src={navlogo} alt= 'logo'/>
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
                            <a href='#top' className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a href='#top' className="button is-light">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

}
export default Nav;
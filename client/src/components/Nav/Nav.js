import React from 'react';
import {Link} from 'react-router-dom';
// Import Icons From Library
import {
    FaGrav,
    FaGreaterThanEqual,
    FaHome,
    FaSun,
    FaMoon
} from 'react-icons/fa/'
// Import Images from assetts
import navLogoDark from '../../assetts/images/nav-logo.png'
import navLogoLight from '../../assetts/images/nav-logo-light.png'

const Nav = ({darkMode, setDarkMode}) => {
    return (
        <nav className={(darkMode === true) ? "navbar is-dark" : "navbar is-light"} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to='/' className="navbar-item">
                    <img src={(!darkMode) ? navLogoDark : navLogoLight} alt='logo' />
                </Link>

                <Link to='#top' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>

            <div className="navbar-menu is-family-monospace">
                <div className="navbar-start">
                    <Link to='/' className="navbar-item" ><FaHome size="2em"/><span className="typed-cursor typed-cursor--blink">|</span><span>Home</span></Link>
                    <Link to='/about' className="navbar-item"><FaGrav  size="2em"/><span className="typed-cursor typed-cursor--blink">|</span><span>About</span></Link>
                    <Link to='/projects' className="navbar-item"><FaGreaterThanEqual size="2em"/><span className="typed-cursor typed-cursor--blink">|</span><span>Projects</span></Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link to='#top' className="navbar-link"><span className="typed-cursor typed-cursor--blink">|</span>More</Link>

                        <div className="navbar-dropdown" >
                            <Link to='/tutorials' className="navbar-item">Tutorials</Link>
                            <Link to='/' className="navbar-item">Social Media</Link>
                            <Link to='#top' className="navbar-item">Contact</Link>
                            <hr className="navbar-divider" />
                            <Link to='#top' className="navbar-item">Report an issue</Link>
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
                        <Link to='#top' className={darkMode ? "button is-white is-rounded" : "button is-black is-rounded"}><strong>Resume</strong></Link>
                        <Link to='#top' className={darkMode ? "button is-light is-rounded is-outlined" : "button is-dark is-rounded is-outlined"}>Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

}
export default Nav;
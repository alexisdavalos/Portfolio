import React from 'react';
//images
import logo from '../../../assetts/images/logo.png'
import lightLogo from '../../../assetts/images/logo-light.png'
//components
import Particles from 'react-particles-js'
import Typed from 'react-typed';
//icons
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
//configs
import setUpConfig from './config/particleConfig.js'

const Home = ({darkMode}) => {
    //Dynamically change color of particles
    const configDark = setUpConfig("#ffffff");
    const configLight = setUpConfig("#000000");
    return (
        <div className="wrapper">
            <div className={(darkMode ? "center-section dark" : "center-section light")}>
                <img src={(darkMode) ? lightLogo : logo} alt='logo' />
                <h2 className="is-size-1 has-text-weight-medium is-family-monospace ">I am a
                    <Typed
                        strings={[`Fullstack Developer`, `Graphic Designer`, `Bookworm`, `Philosopher`, `Dreamer`]}
                        typeSpeed={80}
                        backSpeed={75}
                        loop
                    />
                </h2>
                <h3 className="is-family-monospace is-size-4">with a passion for learning constantly and pushing the boundaries of my understanding.</h3>
                <div className="social-icons is-flex">
                    <a href="https://github.com/alexisdavalos" target="_empty"><FaGithub size="3em"/></a>
                    <a href="https://linkedin.com/in/alexisdavalos" target="_empty"><FaLinkedin size="3em"/></a>
                    <a href="https://twitter.com/digitalnomadjs" target="_empty"><FaTwitter size="3em"/></a>
                </div>
            </div>
            {(darkMode) ? <Particles className="particles isDark" params={configDark} /> : <Particles className="particles isLight" params={configLight} />}
        </div>
    )
}

export default Home;

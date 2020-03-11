import React, {useState, useEffect} from 'react';
import logo from '../../assetts/images/logo.png'
import svgLogo from './deer.svg'
import backdrop from '../../assetts/images/abstract.jpg'
import Particles from 'react-particles-js'
import setUpConfig from './particleConfig.js'

const Home = (props) =>{
     //Dynamically change color of particles
    const configDark = setUpConfig("#ffffff");
    console.log('Dark', configDark)

    const configLight = setUpConfig("#000000");
    console.log('Light', configLight)

    return(
        <div className="Wrapper">
            <div className="Section_1">
                {/* <h1>Full Stack Developer</h1>
                <h3>I design and code beautifully simple things, and I love what I do.</h3> */}
                <img src={logo} alt='logo'/>
            </div>

           {(props.darkMode) ? <Particles className="Particles isDark" params={configDark}/> : <Particles className="Particles isLight" params={configLight}/>}
        </div>
    )
}

export default Home;

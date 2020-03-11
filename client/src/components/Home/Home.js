import React, {useState, useEffect} from 'react';
//images
import logo from '../../assetts/images/logo.png'
import lightLogo from '../../assetts/images/logo-light.png'
import svgLogo from './deer.svg'
import backdrop from '../../assetts/images/abstract.jpg'
//components
import Particles from 'react-particles-js'
import Typed from 'react-typed';
//configs
import setUpConfig from './particleConfig.js'

const Home = (props) =>{
     //Dynamically change color of particles
    const configDark = setUpConfig("#ffffff");
    console.log('Dark', configDark)

    const configLight = setUpConfig("#000000");
    console.log('Light', configLight)

    return(
        <div className="Wrapper">
            <div className={(props.darkMode ? "Home_Section dark" : "Home_Section light")}>
                <img src={(props.darkMode) ? lightLogo : logo} alt='logo'/>
                <h1 className="is-size-1 has-text-weight-medium is-family-monospace ">I am a Full Stack Developer</h1>
                <h3 className="is-family-monospace">with a passion for constantly learning and pushing the boundaries of my understanding.</h3>
            </div>
           {(props.darkMode) ? <Particles className="Particles isDark" params={configDark}/> : <Particles className="Particles isLight" params={configLight}/>}
        </div>
    )
}

export default Home;

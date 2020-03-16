import React from 'react';
//images
import logo from '../../../assetts/images/logo.png'
import lightLogo from '../../../assetts/images/logo-light.png'
//components
import Particles from 'react-particles-js'
import Typed from 'react-typed';
//configs
import setUpConfig from '../config/particleConfig.js'

const Home = (props) => {
    //Dynamically change color of particles
    const configDark = setUpConfig("#ffffff");
    console.log('Dark', configDark)

    const configLight = setUpConfig("#000000");
    console.log('Light', configLight)

    return (
        <div className="wrapper">
            <div className={(props.darkMode ? "center-section dark" : "center-section light")}>
                <img src={(props.darkMode) ? lightLogo : logo} alt='logo' />
                <h2 className="is-family-monospace is-size-3">
                    {'<'}
                    <Typed
                        strings={[`Alexis_Davalos Type={DEV}/>`]}
                        typeSpeed={120}
                        backSpeed={75}
                    />
                </h2>
                <h1 className="is-size-1 has-text-weight-medium is-family-monospace ">I am a Full Stack Developer</h1>
                <h3 className="is-family-monospace is-size-4">with a passion for learning constantly and pushing the boundaries of my understanding.</h3>
            </div>
            {(props.darkMode) ? <Particles className="particles isDark" params={configDark} /> : <Particles className="particles isLight" params={configLight} />}
        </div>
    )
}

export default Home;

import React from 'react'
//logos
import reactLogo from '../../../assetts/logos/react-logo.png'
import reduxLogo from '../../../assetts/logos/redux-logo.png'
import jsLogo from '../../../assetts/logos/js-logo.png'
import cssLogo from '../../../assetts/logos/css-logo.png'
import htmlLogo from '../../../assetts/logos/html-logo.png'

const About = (props) =>{
    return (
  
        <div className="wrapper about is-desktop is-family-monospace">
            <div className={props.darkMode ? "box has-text-white" : "box has-text-dark"}>
                <h1 className="is-size-3 is-family-monospace">About Me</h1>
                <p>My name is Alexis Davalos, I am a Full-Stack Developer with a passion for constantly learning and pushing the boundaries of my understanding. I am passionate about philosophy, language, technology and wellness/fitness. I am fascinated by life and our ability to share our stories with one another.</p>
            </div>
            <div className={props.darkMode ? "box has-text-white" : "box has-text-dark"}>
            <div class="cube-wrapper">
                <div class="cube-wrap">
                    <div class="cube-box">
                        <div class="single-box side-back">
                            <img src={reactLogo} alt="react logo"/>
                        </div>
                        <div class="single-box side-top">
                            <img src={reduxLogo} alt="redux logo"/>
                        </div>
                        <div class="single-box side-bottom">
                            <img src={jsLogo} alt="javascript logo"/>
                        </div>
                        <div class="single-box side-left">
                            <img src={cssLogo} alt="css logo"/>
                        </div>
                        <div class="single-box side-right">
                            <img src={htmlLogo} alt="html logo"/>
                        </div>
                        <div class="single-box side-front"></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
     
    )
}

export default About;
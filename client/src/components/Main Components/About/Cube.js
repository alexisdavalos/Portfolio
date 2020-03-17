import React from 'react';
//import logos for cube
import reactLogo from '../../../assetts/logos/react-logo.png'
import reduxLogo from '../../../assetts/logos/redux-logo.png'
import jsLogo from '../../../assetts/logos/js-logo.png'
import cssLogo from '../../../assetts/logos/css-logo.png'
import htmlLogo from '../../../assetts/logos/html-logo.png'
import githubLogo from '../../../assetts/logos/github-logo.png'
const Cube = (props) =>{
    return(
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
                    <div class="single-box side-front">
                        <img src={githubLogo} alt="github logo"/>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Cube;
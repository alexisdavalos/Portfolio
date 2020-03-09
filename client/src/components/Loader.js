import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner'
import Logo from '../assetts/images/logo.png'

const LoaderSection = () => {

    useEffect(() => {
        //selects loader to toggle hidden class
        const loader = document.querySelector(".loaderWrapper");
        //select HTML body to toggle Y-Axis Overflow
        const HTMLbody = document.querySelector('html');
        //toggles Y-Axis Overflow
        HTMLbody.style.overflowY = "hidden";
        //declares 1 second timer
        const timer = setTimeout(() => {
            loader.classList.toggle("hidden")
            HTMLbody.style.overflowY = "visible"
        }, 1000)

        // cleaup function - removes timer reference from memory
        return () => {
            clearTimeout(timer);
        }
    }, [])


    return (
        <div id="loader" className='loaderWrapper'>
            <img src={Logo} alt='Alexis Davalos Developer/Programmer'style={{width: '300px'}}></img>
            <Loader
                type="ThreeDots"
                color="#333"
                height={100}
                width={100}
            // timeout={3000} //3 secs
            />
        </div>
    )
}

export default LoaderSection;
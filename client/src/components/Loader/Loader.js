import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner'
import Logo from '../../assetts/images/logo.png'
import LoaderToggle from '../../utils/LoaderTimer.js'
const LoaderSection = () => {

    useEffect(() => {
        LoaderToggle();
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
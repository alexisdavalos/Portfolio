import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner'
import Logo from '../../assetts/images/logo.png'
import LoaderToggle from '../../utils/LoaderTimer.js'
const LoaderSection = () => {
    //Triggers the loader once per component refresh
    useEffect(() => {
        LoaderToggle();
    }, [])
    //Renders the loader component
    return (
        <div id="loader" className='loaderWrapper'>
            <img src={Logo} alt='Alexis Davalos Developer/Programmer' style={{ width: '300px' }}></img>
            <Loader
                type="ThreeDots"
                color="#333"
                height={100}
                width={100}
            // timeout={3000} //3 secs
            // not using built in timeout to add backdrop to the loader
            />
        </div>
    )
}

export default LoaderSection;
import React, {useState} from 'react';
import './Styling/App.scss';
import {useDarkMode} from '../hooks/useDarkMode'

//Components
import Loader from './Loader/Loader.js'
import Component from './Component.js';
import Nav from './Nav/Nav.js'
import Home from './Home/Home.js'

//images

function App() {
  const [darkMode, setDarkMode] = useDarkMode('darkmode', false);
  console.log('DarkMode:', darkMode);
  //In case local storage can't set token -- defaults to light theme
  if(window.localStorage.getItem('darkmode') === null){
      setDarkMode(false)
  };
  return (
    <>
      <div className="Container is-dark">
        <Loader/>
        <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Home darkMode={darkMode}/>
      </div>
    </>
  );
}

export default App;

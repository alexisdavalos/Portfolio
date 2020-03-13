import React, {useState} from 'react';
import './Styling/App.scss';
import {useDarkMode} from '../hooks/useDarkMode'
import {Switch, Route} from 'react-router-dom';
//Components
import Loader from './Loader/Loader.js'
import Component from './Component.js';
import Nav from './Nav/Nav.js'
import Home from './Main Components/Home/Home.js'
import Projects from './Main Components/Projects/Projects.js'

//images

function App() {
  const [darkMode, setDarkMode] = useDarkMode('darkmode', false);
  console.log('DarkMode:', darkMode);
  //In case local storage can't set token -- defaults to light theme
  if(window.localStorage.getItem('darkmode') === null){
      setDarkMode(false)
  };
  return (

     
          <Switch className="Container is-dark">
          <Route path="/home">
            <Loader/>
            <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Home darkMode={darkMode}/>
          </Route>

          <Route path="/projects">
            <Loader/>
            <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Projects darkMode={darkMode}/>
          </Route>

          <Route exact path="/">
            <Loader/>
            <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
          </Route>
          </Switch>
  

  );
}

export default App;

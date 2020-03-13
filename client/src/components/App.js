import React from 'react';
import './Styling/App.scss';
import {useDarkMode} from '../hooks/useDarkMode'
import {Switch, Route} from 'react-router-dom';

//Component Imports
import Loader from './Loader/Loader.js'
import Nav from './Nav/Nav.js'
import Home from './Main Components/Home/Home.js'
import Projects from './Main Components/Projects/Projects.js'

function App() {
  //initialize dark mode hook
  const [darkMode, setDarkMode] = useDarkMode('darkmode', false);
  //In case local storage can't set token -- defaults to light theme
  if(window.localStorage.getItem('darkmode') === null){
      setDarkMode(false)
  };
  return (
    <div className="Container is-dark">
      <Switch>
        <Route exact path="/">
          <Loader/>
          <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Home darkMode={darkMode}/>
        </Route>

        <Route path="/projects">
          <Loader/>
          <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Projects darkMode={darkMode}/>
        </Route>

        <Route path="/home">
          <Loader/>
          <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

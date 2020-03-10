import React from 'react';
import './Styling/App.scss';

//Components
import Loader from './Loader/Loader.js'
import Component from './Component.js';
import Nav from './Nav/Nav.js'
import Home from './Home/Home.js'


function App() {
  return (
    <>
      <div className="Container is-dark">
        <Loader/>
        <Nav/>
        <Home/>
        <Component/>
      </div>
    </>
  );
}

export default App;

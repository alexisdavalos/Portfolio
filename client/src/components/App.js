import React from 'react';
import './App.scss';

//Components
import Loader from './Loader'
import Component from './Component';
import Nav from './Nav.js'


function App() {
  return (
    <>
      <div className="Container">
        <Loader/>
        <Nav/>
        <Component/>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import './App.scss';

//Components
import Loader from './Loader'
import Component from './Component';
import Nav from './Nav.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader/>
        <Nav/>
        <Component/>
      </header>
    </div>
  );
}

export default App;

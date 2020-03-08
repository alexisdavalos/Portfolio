import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Component from './Component';
import Nav from './Nav.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Component/>
      </header>
    </div>
  );
}

export default App;

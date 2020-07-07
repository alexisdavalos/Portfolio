import React from "react";
import "../styling/index.scss";
import { useDarkMode } from "../hooks/useDarkMode";
import { Switch, Route } from "react-router-dom";

//Component Imports
import Loader from "./Loader/Loader.js";
import Nav from "./Nav/Nav.js";
import About from "./About/About.js";
import Home from "./Home/Home.js";
import Projects from "./Projects/Projects.js";
import Dashboard from "./Tutorials/Dashboard.js";

function App() {
  //Initialize dark mode hook
  const [darkMode, setDarkMode] = useDarkMode("darkmode", true);

  //In case hook fails and can't set token -- defaults to dark theme
  if (window.localStorage.getItem("darkmode") === null) {
    setDarkMode(true);
  }

  return (
    <div className="app-container is-dark">
      <Switch>
        <Route exact path="/">
          <Loader />
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
          <Home darkMode={darkMode} />
        </Route>

        <Route path="/about">
          <Loader />
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
          <About darkMode={darkMode} />
        </Route>

        <Route path="/projects">
          <Loader />
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
          <Projects darkMode={darkMode} />
        </Route>

        <Route path="/home">
          <Loader />
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        </Route>

        <Route path="/tutorials">
          <Loader />
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
          <Dashboard darkMode={darkMode} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

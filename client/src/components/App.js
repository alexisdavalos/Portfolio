import React, { useState } from "react";
import "./Styling/index.scss";
import { useDarkMode } from "../hooks/useDarkMode";
import { Switch, Route } from "react-router-dom";

//Component Imports
import Loader from "./Loader/Loader.js";
import Nav from "./Nav/Nav.js";
import About from "./Main Components/About/About.js";
import Home from "./Main Components/Home/Home.js";
import Projects from "./Main Components/Projects/Projects.js";
import Dashboard from "./Main Components/Tutorials/Dashboard.js";

function App() {
  //Initialize dark mode hook
  const [darkMode, setDarkMode] = useDarkMode("darkmode", true);
  //Initialize Scroll Position Variables
  // const [scrollPosition, setScroll] = useState()
  // const [scrollLimit, setLimit] = useState()
  //In case local storage can't set token -- defaults to light theme
  if (window.localStorage.getItem("darkmode") === null) {
    setDarkMode(true);
  }
  // Scroll Event Listener
  // window.addEventListener("scroll", function (event) {
  //   setScroll(this.scrollY);
  //   setLimit(document.body.offsetHeight - window.innerHeight);
  //   console.log(scrollLimit, scrollPosition);
  // });
  return (
    <>
      {/* <div className="progressBar">
      <progress class="progress is-primary" value={scrollPosition} max={scrollLimit}>45% fill</progress>
    </div> */}
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
    </>
  );
}

export default App;

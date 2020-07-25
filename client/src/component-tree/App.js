import React, { lazy, Suspense } from "react";
import "../styling/index.scss";
import { useDarkMode } from "../hooks/useDarkMode";
import { Switch, Route } from "react-router-dom";

//Component Imports
import Loader from "./Loader/Loader.js";
// Lazy Components
const Nav = lazy(() => import("./Nav/Nav.js"));
const Home = lazy(() => import("./Home/Home.js"));

function App() {
  //Initialize dark mode hook
  const [darkMode, setDarkMode] = useDarkMode("darkmode", true);

  //In case hook fails and can't set token -- defaults to dark theme
  if (window.localStorage.getItem("darkmode") === null) {
    setDarkMode(true);
  }

  return (
    <div className="app-container is-dark">
      <Suspense fallback={Loader}>
        <Switch>
          <Route exact path="/">
            <Loader />
            <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
            <Home darkMode={darkMode} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

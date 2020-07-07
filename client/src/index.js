import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
//Components
import App from "./component-tree/App";
//Redux Imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
//Styling Libraries
import "./styling/index.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "bulma/css/bulma.css";

//Declare Middleware
const middleware = [thunk, logger];
//Initialize Store Variable
let store = [];

//Use middleware in development only
if (process.env.NODE_ENV !== "production") {
  store = createStore(rootReducer, applyMiddleware(...middleware));
} else {
  store = createStore(rootReducer);
}

ReactDOM.render(
  //Wrapps R
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

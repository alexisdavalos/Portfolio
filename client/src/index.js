import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {Provider} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'bulma/css/bulma.css'


const middleware = [thunk, logger]

const store = createStore(rootReducer, applyMiddleware(...middleware));
console.log('Store:', store)
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
document.getElementById('root')
);



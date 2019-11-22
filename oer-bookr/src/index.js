import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Redux imports
import { applyMiddleware, createStore } from 'redux';
// react-redux imports
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// component imports
import reducer from './reducers';
import {BrowserRouter as Router} from 'react-router-dom';

const store = createStore(
    reducer,
    (applyMiddleware(thunk, logger))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));



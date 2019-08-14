// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


// State and reducers
const reducers = combineReducers({
  changeMe: (state = null, action) => state
});


const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'tokyo' ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(logger, reduxPromise))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

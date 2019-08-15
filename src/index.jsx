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
import ChannelsReducer from './reducers/channels_reducer';
import CurrentUserReducer from './reducers/current_user_reducer';
import MessagesReducer from './reducers/messages_reducer';
import SelectedChannelReducer from './reducers/selected_channel_reducer';

const identityReducer = (state = null) => state;


const reducers = combineReducers({
	messages: MessagesReducer,
	channels: ChannelsReducer,
	currentUser: CurrentUserReducer,
	selectedChannel: SelectedChannelReducer
});


const initialState = {
  messages:
  	[
	  {
	    "author":"anonymous92",
	    "content":"Hello world!",
	    "created_at":"2017-09-26T23:03:16.365Z"
	  },
	  {
	    "author":"anonymous77",
	    "content":"My name is anonymous77",
	    "created_at":"2017-09-26T23:03:21.194Z"
	  }
	],
  channels: [ 'general', 'react', 'tokyo' ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

const middlewares = applyMiddleware(logger, promiseMiddleware);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

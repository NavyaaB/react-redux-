import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducer';
import createHistory from 'history/createBrowserHistory';

import thunk from 'redux-thunk';


export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions

const getMiddleware = () => {

    // Enable additional logging in non-production environments.
      return applyMiddleware(createLogger());
 
};
const middleware = [thunk];
const initialState = {};

export const store = createStore(reducer, initialState, applyMiddleware(...middleware));

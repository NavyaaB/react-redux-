import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducer';


import thunk from 'redux-thunk';

// Build the middleware for intercepting and dispatching navigation actions

const middleware = [thunk];
const initialState = {};

export const store = createStore(reducer, initialState, applyMiddleware(...middleware));

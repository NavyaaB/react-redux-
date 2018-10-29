import { combineReducers } from 'redux';
import home from './reducers/homeReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  home: home,
  router: routerReducer
});

import { APP_LOAD, REMOVE_VEHICLE } from '../constants/actionTypes';

export default function(state = {items:[], item: {}}, action){
  switch (action.type) {
    case APP_LOAD:
    //console.log('reducer');
    // setting the initial state of app, so on app load we get the 10 vehicles
      return {
        ...state,
        items: action.payload,
        tags: action.payload[0].tags
      };

    case REMOVE_VEHICLE: 
    //console.log('removing vehicle based on id or we can use vehicle model');
      let newlist = state.items.filter(home => {
        return action.id !== home.id
      });
      return {
        ...state,
        items: newlist
      }

    default:
      return state;
  }
};

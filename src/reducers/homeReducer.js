import { APP_LOAD, APP_UNLOAD, REMOVE_VEHICLE } from '../constants/actionTypes';

const initialState = {
  items: [],
  item: {}
}
export default function(state = initialState, action){
  switch (action.type) {
    case APP_LOAD:
    //console.log('reducer');
    // setting the initial state of app, so on app load we get the 10 vehicles
      return {
        ...state,
        items: action.payload,
        tags: action.payload[0].tags
      };
    case APP_UNLOAD:
      return {};

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

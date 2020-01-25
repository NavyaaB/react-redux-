import { APP_LOAD, REMOVE_VEHICLE } from './actionTypes';
import list from '../vehicledetails/list';

export const fetchData = () => dispatch => {
	//console.log('fetching!!! function for action type load data');
	dispatch({
		type: APP_LOAD,
		payload: list
	})
}

export const deleteVehicle = (id) => dispatch => {
	//console.log('!!!!!deleting function for action type delete vehicle');
	dispatch({
		type: REMOVE_VEHICLE,
		id
	})
}
import { ADD_PERSON } from "./peopleTypes";

export const peopleReducer = ( state = [], action ) => {
	switch (action.type) {
		case ADD_PERSON:
			return [...state, action.payload];
	
		default:
			return state;
	}
}
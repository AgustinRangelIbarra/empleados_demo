import { ADD_PERSON, DELETE_PERSON, UPDATE_PERSON } from "./peopleTypes";

export const peopleReducer = ( state = [], action ) => {
	switch (action.type) {
		case ADD_PERSON:
			return [...state, action.payload];

		case DELETE_PERSON:
			return state.filter( (registro) => registro.id !== action.payload );

		case UPDATE_PERSON:
			return state.map( registro => (registro.id === action.payload.id) ? action.payload : registro );

	
		default:
			return state;
	}
}
import { ADD_PUESTO, DELETE_PUESTO, GET_PUESTO, UPDATE_PUESTO } from "./puestoTypes";

export const puestoReducer = ( state = [], action ) => {
	switch (action.type) {
		case ADD_PUESTO:
			return [...state, action.payload];

		case DELETE_PUESTO:
			return state.filter( registro => registro.id !== action.payload);

		case GET_PUESTO:
			return state.find( registro => registro.id === action.payload);

		case UPDATE_PUESTO:
			return state;
			// return state.map( registro => registro.id + 'a');

		default:
			return state;
	}
}
import { ADD_PUESTO, DELETE_PUESTO } from "./puestoTypes";

export const puestoReducer = ( state = [], action ) => {
	switch (action.type) {
		case ADD_PUESTO:
			return [...state, action.payload];

		case DELETE_PUESTO:
			return state.filter( registro => registro.id !== action.payload);
	
		default:
			return state;
	}
}
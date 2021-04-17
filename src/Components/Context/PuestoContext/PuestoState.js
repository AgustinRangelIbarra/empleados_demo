import { useReducer } from 'react';
import { puestoContext } from "./puestoContext";
import { puestoReducer } from './puestoReducer'
import { ADD_PUESTO, DELETE_PUESTO } from "./puestoTypes";

const PuestoState = ( props ) => {

	const ls = localStorage;

	const initialState = () => JSON.parse(ls.getItem('listPuestos')) || [];

	const [state, dispatch] = useReducer(puestoReducer, [], initialState);

	const insertPuesto = (newPuesto) => {
		const action = {
			type: ADD_PUESTO,
			payload: newPuesto
		};
		dispatch(action);
	}

	const deletePuesto = (id) => {
		const action = {
			type: DELETE_PUESTO,
			payload: id
		}
		dispatch(action);
	}

	return (
		<puestoContext.Provider value={{ state, insertPuesto, deletePuesto}}>
			{
				props.children
			}
		</puestoContext.Provider>
	);
}

export default PuestoState;
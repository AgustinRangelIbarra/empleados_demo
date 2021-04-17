import { useReducer } from 'react';
import { puestoContext } from "./puestoContext";
import { puestoReducer } from './puestoReducer'
import { ADD_PUESTO } from "./puestoTypes";

const PuestoState = ( props ) => {

	const ls = localStorage;

	const initialState = () => JSON.parse(ls.getItem('listPuestos')) || [];

	const [state, dispatch] = useReducer(puestoReducer, [], initialState);

	const addPuesto = (newPuesto) => {
		const action = {
			type: ADD_PUESTO,
			payload: newPuesto
		};
		dispatch(action);
	}

	return (
		<puestoContext.Provider value={{ state, addPuesto}}>
			{
				props.children
			}
		</puestoContext.Provider>
	);
}

export default PuestoState;
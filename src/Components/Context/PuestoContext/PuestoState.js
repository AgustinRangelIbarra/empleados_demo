import { useReducer, useState } from "react";
import { puestoContext } from "./puestoContext";
import { puestoReducer } from "./puestoReducer";
import { ADD_PUESTO, DELETE_PUESTO, GET_PUESTO, UPDATE_PUESTO } from "./puestoTypes";

const PuestoState = (props) => {
	const ls = localStorage;

	const initialState = () => JSON.parse(ls.getItem("listPuestos")) || [];

	const [state, dispatch] = useReducer(puestoReducer, [], initialState);

	const [editPuesto, setEditPuesto] = useState(null);

	const insertPuesto = (newPuesto) => {
		const action = {
			type: ADD_PUESTO,
			payload: newPuesto,
		};
		dispatch(action);
	};

	const deletePuesto = (id) => {
		const action = {
			type: DELETE_PUESTO,
			payload: id,
		};
		dispatch(action);
	};

	const updatePuesto = (newValues) => {
		const action = {
			type: UPDATE_PUESTO,
			payload: newValues,
		};
		// console.log(action);
		dispatch(action);
		setEditPuesto(null);
	};

	const getPuesto = (id) => {
		const puesto = state.find((registro) => registro.id === id);
		// console.log(puesto);
		setEditPuesto(puesto);
	};

	return (
		<puestoContext.Provider
			value={{
				state,
				insertPuesto,
				deletePuesto,
				updatePuesto,
				getPuesto,
				updatePuesto,
				editPuesto,
			}}
		>
			{props.children}
		</puestoContext.Provider>
	);
};

export default PuestoState;

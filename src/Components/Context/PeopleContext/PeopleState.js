import { useReducer, useState, useEffect } from "react";
import { peopleContext } from "./peopleContext";
import { peopleReducer } from "./peopleReducer";
import { ADD_PERSON, DELETE_PERSON, UPDATE_PERSON } from "./peopleTypes";

const PeopleState = (props) => {
	const ls = localStorage;

	const initialState = () => JSON.parse(ls.getItem("listPersonas")) || [];

	const [state, dispatch] = useReducer(peopleReducer, [], initialState);

	const [editPersona, setEditPersona] = useState(null);

	useEffect(() => {
		ls.setItem("listPersonas", JSON.stringify(state));
	}, [state]);

	const insertPerson = (newPerson) => {
		const action = {
			type: ADD_PERSON,
			payload: newPerson,
		};
		dispatch(action);
	};

	const deletePerson = (id) => {
		const action = {
			type: DELETE_PERSON,
			payload: id,
		};
		dispatch(action);
	};

	const updatePerson = (newValues) => {
		const action = {
			type: UPDATE_PERSON,
			payload: newValues,
		};
		console.log(action);
		dispatch(action);
		setEditPersona(null);
	};

	const getPerson = (id) => {
		const persona = state.find((registro) => registro.id === id);
		console.log(persona);
		setEditPersona(persona);
	};

	return (
		<peopleContext.Provider
			value={{ state, insertPerson, deletePerson, updatePerson, getPerson, editPersona }}
		>
			{props.children}
		</peopleContext.Provider>
	);
};

export default PeopleState;

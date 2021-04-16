import { useReducer } from 'react';
import { peopleContext } from "./peopleContext";
import { peopleReducer } from './peopleReducer'
import { ADD_PERSON } from "./peopleTypes";

const PeopleState = ( props ) => {

	const ls = localStorage;

	const initialState = () => JSON.parse(ls.getItem('listPersonas')) || [];

	const [state, dispatch] = useReducer(peopleReducer, [], initialState);

	const addPerson = (newPerson) => {
		const action = {
			type: ADD_PERSON,
			payload: newPerson
		};
		dispatch(action);
	}

	return (
		<peopleContext.Provider value={{ state, addPerson}}>
			{
				props.children
			}
		</peopleContext.Provider>
	);
}

export default PeopleState;
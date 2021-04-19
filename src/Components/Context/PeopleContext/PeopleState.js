import { useReducer } from 'react';
import { peopleContext } from "./peopleContext";
import { peopleReducer } from './peopleReducer'
import { ADD_PERSON, DELETE_PERSON } from "./peopleTypes";

const PeopleState = ( props ) => {

	const ls = localStorage;

	const initialState = () => JSON.parse(ls.getItem('listPersonas')) || [];

	const [state, dispatch] = useReducer(peopleReducer, [], initialState);

	const insertPerson = (newPerson) => {
		const action = {
			type: ADD_PERSON,
			payload: newPerson
		};
		dispatch(action);
	}

	const deletePerson = (id) => {
		const action = {
			type: DELETE_PERSON,
			payload: id
		}
		dispatch(action);
	}

	return (
		<peopleContext.Provider value={{ state, insertPerson, deletePerson}}>
			{
				props.children
			}
		</peopleContext.Provider>
	);
}

export default PeopleState;
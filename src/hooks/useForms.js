import { useState, useContext, useEffect } from "react";
import { puestoContext } from "../Components/Context/PuestoContext/puestoContext";
import { peopleContext } from "../Components/Context/PeopleContext/peopleContext";

export const useForms = (initialState = {}) => {
	const contextPuesto = useContext(puestoContext);
	const { editPuesto } = contextPuesto;

	const contextPersona = useContext(peopleContext);
	const { editPersona } = contextPersona;

	const [valueForms, setValueForms] = useState(initialState);

	useEffect(() => {
		if (editPuesto) {
			setValueForms(editPuesto);
			console.log(editPuesto)
		} else {
			setValueForms('');
		}
	}, [editPuesto]);

	useEffect(() => {
		if(editPersona){
			setValueForms(editPersona);
		} else {
			setValueForms('');
		}
	}, [editPersona])


	const handleChange = (e) => {
		setValueForms({
			...valueForms,
			[e.target.name]: e.target.value,
		});
	};

	const reset = () => {
		setValueForms(initialState);
	};


	return {
		valueForms,
		reset,
		handleChange,
	};
};

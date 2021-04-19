import { useState, useContext, useEffect } from "react";
import { puestoContext } from "../Components/Context/PuestoContext/puestoContext";

export const useForms = (initialState = {}) => {
	const contextPuesto = useContext(puestoContext);
	const { editPuesto } = contextPuesto;

	const [valueForms, setValueForms] = useState(initialState);

	useEffect(() => {
		if (editPuesto) {
			setValueForms(editPuesto);
			console.log(editPuesto)
		} else {
			setValueForms('');
		}
	}, [editPuesto]);

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

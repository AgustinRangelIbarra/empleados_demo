import { useState } from "react";

export const useForms = ( initialState = { } ) => {
	const [valueForms, setValueForms] = useState(initialState);
	
	const handleChange = (e) => {
		setValueForms({
			...valueForms,
			[e.target.name] : e.target.value
		})
	}

	const reset = () => {
		setValueForms(initialState);
	}

	return { 
		valueForms,
		reset,
		handleChange
	}
};

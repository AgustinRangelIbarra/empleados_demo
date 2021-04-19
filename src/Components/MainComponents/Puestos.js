import { useEffect, useContext, useState, useRef } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { useForms } from "../../hooks/useForms";
import { puestoContext } from "../Context/PuestoContext/puestoContext";
import TablaRegistros from '../Table';

const Puestos = () => {
	const ls = localStorage;

	const { valueForms, reset, handleChange } = useForms({ puesto: "" });
	const { puesto } = valueForms;

	const contextPuesto = useContext(puestoContext);
	const { state, insertPuesto, updatePuesto, getPuesto } = contextPuesto;

	const [toggleUpdateValues, setToggleUpdateValues] = useState(0);
	const inputPuesto = useRef();

	useEffect(() => {
		ls.setItem("listPuestos", JSON.stringify(state));
	}, [state]);

/* 	useEffect(() => {
		if (puesto !== null) {
			insertPuesto(updatePuesto.puesto);
			console.log(updatePuesto);
		} else {
			insertPuesto("");
		}
	}, [updatePuesto]); */

	const handleEditar = (id) => {
		setToggleUpdateValues(() => !toggleUpdateValues);
		// getPuesto(id);

		// const valueInput = inputPuesto.current;
	};

		const handleSubmit = (e) => {
			e.preventDefault();

			if (puesto.trim().length < 1) return;

			if (!toggleUpdateValues) {
				const newPuesto = {
					...valueForms,
					id: new Date().getTime(),
				};
				console.log(`AGREGAR: ${JSON.stringify(newPuesto)}`);
				insertPuesto(newPuesto);
			} else if (toggleUpdateValues) {
				console.log("update");
				const newValues = {
					...valueForms,
				};
				// updatePuesto(newValues);
			}
			reset();
			setToggleUpdateValues(0);
		};

	return (
		<Container>
			<Row>
				<Col>
					<h1>Puestos</h1>
					<Form>
						<Form.Control
							type="text"
							required
							placeholder="Filtrar elementos"
							className="mb-5 mt-5"
						/>
					</Form>
					
					<TablaRegistros />

				</Col>

				<Col>
					<div>
						<h3 className="mt-5">Detalles del Puesto</h3>
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label className="form-label">Puesto</label>
								<input
									onChange={handleChange}
									ref={inputPuesto}
									name="puesto"
									type="text"
									value={puesto}
									className="form-control"
								/>
							</div>
							<div className="d-flex justify-content-center align-items-center">
								{toggleUpdateValues ? (
									<input
										type="submit"
										value="Actualizar Valores"
										className="btn btn-primary mx-2 mb-5"
										onClick={() => updatePuesto}
									/>
								) : (
									<input
										type="submit"
										value="Agregar"
										className="btn btn-dark mx-2 mb-5"
									/>
								)}
							</div>
						</form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Puestos;

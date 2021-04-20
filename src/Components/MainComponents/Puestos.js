import { useContext } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import { useForms } from "../../hooks/useForms";
import { puestoContext } from "../Context/PuestoContext/puestoContext";
import Tabla from "../Tabla";

const Puestos = () => {

	const { valueForms, reset, handleChange } = useForms({ puesto: "" });
	const { puesto } = valueForms;

	const contextPuesto = useContext(puestoContext);
	const { insertPuesto, editPuesto, updatePuesto } = contextPuesto;


	const handleSubmit = (e) => {
		e.preventDefault();

		if (puesto.trim().length < 1) return;

		if ( !editPuesto ) {
			const newPuesto = {
				...valueForms,
				id: new Date().getTime(),
			};
			console.log(valueForms)
			console.log(`AGREGAR: ${JSON.stringify(newPuesto)}`);
			insertPuesto(newPuesto);
			// console.log(newPuesto);

		} else {
			const updatedPuesto = {
				...valueForms,
				id: editPuesto.id
			}
			console.log(updatedPuesto);
			updatePuesto(updatedPuesto);
		}
		reset();
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

					<Tabla />
					{/* <h6>{toggleUpdateValues}</h6> */}
				</Col>

				<Col>
					<div>
						<h3 className="mt-5">Detalles del Puesto</h3>

						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label className="form-label">Puesto</label>
								<input
									onChange={handleChange}
									name="puesto"
									type="text"
									value={puesto}
									className="form-control"
								/>
							</div>
							<div className="d-flex justify-content-center align-items-center">
								{
									editPuesto ? (
										<input
											type="submit"
											value="Actualizar Valores"
											className="btn btn-primary mx-2 mb-5"
										/>
									) : (
										<input
											type="submit"
											value="Agregar Registro"
											className="btn btn-dark mx-2 mb-5"
										/>
									)
								}
							</div>
						</form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Puestos;

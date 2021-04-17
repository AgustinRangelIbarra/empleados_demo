import { useEffect, useContext } from "react";
import { Container, Col, Row, Form, Button, Table } from "react-bootstrap";
import { useForms } from "../../hooks/useForms";
import { puestoContext } from "../Context/PuestoContext/puestoContext";

const Puestos = () => {
	const ls = localStorage;

	const { valueForms, reset, handleChange } = useForms({puesto: ""});
	const { puesto } = valueForms;

	const contextPuesto = useContext(puestoContext);
	const { state, insertPuesto, deletePuesto} = contextPuesto;

	useEffect(() => {
		ls.setItem("listPuestos", JSON.stringify(state));
	}, [state]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (puesto.trim().length < 1) return;

		const newPuesto = {
			...valueForms,
			id: new Date().getTime(),
		};
		console.log(newPuesto);
		insertPuesto(newPuesto);
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

					<div>
						<Table striped bordered hover size="sm">
							<thead>
								<tr>
									<th>ID</th>
									<th>Puesto</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{
									state.map( (registro) => (
										<tr>
											<td>{registro.id}</td>
											<td>{registro.puesto}</td>
											<td>
												<div className="d-flex flex-column justify-content-center ">
													<button
														type="submit"
														value="Editar"
														className="btn btn-warning btn-sm"
														onClick={() => console.log("xd")}
													>
														Editar
													</button>
													<button
														type="submit"
														value={registro.id}
														className="btn btn-danger btn-sm"
														onClick={() => deletePuesto(registro.id)}
													>
														Eliminar
													</button>
												</div>
											</td>
										</tr>
									))
								}
							</tbody>
						</Table>
					</div>
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
								<input type="submit" value="Agregar" className="btn btn-dark mx-2 mb-5" />
							</div>
						</form>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Puestos;
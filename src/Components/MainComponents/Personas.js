import { useContext } from "react";
import { Container, Col, Row, Table, Form } from "react-bootstrap";
import { useForms } from "../../hooks/useForms";
import { peopleContext } from "../Context/PeopleContext/peopleContext";

import "../styles/Persona.css";

const Personas = () => {
	const { valueForms, reset, handleChange } = useForms({
		nombre: "",
		apellido: "",
		fecha: "",
	});
	const { nombre, apellido, fecha } = valueForms;

	const contextPeople = useContext(peopleContext);
	const {
		state,
		insertPerson,
		deletePerson,
		updatePerson,
		editPersona,
		getPerson,
	} = contextPeople;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!nombre || !apellido || !fecha) return;

		if (!editPersona) {
			const newPerson = {
				...valueForms,
				id: new Date().getTime(),
			};
			console.warn(`AGREGAR: ${newPerson}`);
			insertPerson(newPerson);
		} else {
			const updatedPersona = {
				...valueForms,
				id: editPersona.id,
			};
			console.warn(`EDITAR: ${JSON.stringify(updatedPersona)}`);
			updatePerson(updatedPersona);
		}
		reset();
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1>Personas</h1>
					<Form>
						<Form.Control
							type="text"
							required
							placeholder="Filtrar elementos"
							className="mb-5 mt-5"
						/>
					</Form>

					<div>
						{state.length ? (
							<Table striped bordered hover size="sm">
								<thead>
									<tr>
										<th>ID</th>
										<th>Nombre</th>
										<th>Apellido</th>
										<th>Fecha de Nacimiento</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{state.map((registro) => (
										<tr>
											<td>{registro.id}</td>
											<td>{registro.nombre}</td>
											<td>{registro.apellido}</td>
											<td>{registro.fecha}</td>
											<td>
												<div className="d-flex flex-column justify-content-center ">
													<button
														key={registro.id}
														type="submit"
														value="Editar"
														className="btn btn-warning btn-sm"
														onClick={() => getPerson(registro.id)}
													>
														Editar
													</button>
													<button
														type="submit"
														value="Eliminar"
														className="btn btn-danger btn-sm"
														onClick={() => deletePerson(registro.id)}
													>
														Eliminar
													</button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						) : (
							<div className="">
								<hr />
								<h5 style={{ textAlign: "center" }}>No Hay Registros Aún</h5>
								<hr />
							</div>
						)}
					</div>
					{/* <h3>{JSON.stringify(editPersona)}</h3> */}
				</Col>

				<Col>
					<div>
						<h3 className="mt-5">Detalles de la Persona</h3>

						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label className="form-label">Nombre</label>
								<input
									onChange={handleChange}
									name="nombre"
									type="text"
									value={nombre}
									className="form-control"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Apellido</label>
								<input
									onChange={handleChange}
									name="apellido"
									type="text"
									value={apellido}
									className="form-control"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Fecha de Nacimiento</label>
								<input
									onChange={handleChange}
									name="fecha"
									type="date"
									value={fecha}
									className="form-control"
								/>
							</div>
							<div className="d-flex justify-content-center align-items-center">
								{editPersona ? (
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
								)}
							</div>
						</form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Personas;

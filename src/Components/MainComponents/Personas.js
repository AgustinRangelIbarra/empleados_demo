import { useEffect, useContext } from "react";
import { Container, Col, Row, Button, Table, Form } from "react-bootstrap";
import { useForms } from "../../hooks/useForms";
import { peopleContext } from "../Context/PeopleContext/peopleContext";

import "../styles/Persona.css";

const Personas = () => {
	const ls = localStorage;

	const { valueForms, reset, handleChange } = useForms({
		nombre: "",
		apellido: "",
		fecha: "",
	});
	const { nombre, apellido, fecha } = valueForms;

	const contextPeople = useContext(peopleContext);
	const { state, addPerson, deletePerson } = contextPeople;

	useEffect(() => {
		ls.setItem("listPersonas", JSON.stringify(state));
	}, [state]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (nombre.trim().length < 1 || apellido.trim().length < 1 || fecha.trim().length < 1) return;

		const newPerson = {
			...valueForms,
			id: new Date().getTime(),
		};
		console.log(newPerson);
		addPerson(newPerson);
		reset();
	};

	const handleFilter = () => {
		// this.state.map( (registro) => registro.id )
	}

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
							onSubmit={handleFilter}
						/>
					</Form>

					<div>
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
								{
									state.map( (registro) => (
										<tr>
											<td>{registro.id}</td>
											<td>{registro.nombre}</td>
											<td>{registro.apellido}</td>
											<td>{registro.fecha}</td>
											<td>
												<div className="d-flex flex-column justify-content-center ">
													<button
														type="submit"
														value="Editar"
														className="btn btn-warning btn-sm"
														onClick={() => console.log("xd")}
													>Editar</button>
													<button
														type="submit"
														value={registro.id}
														className="btn btn-danger btn-sm"
														onClick={() => deletePerson(registro.id)}
													>Eliminar</button>
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
								<input type="submit" value="Agregar" className="btn btn-dark mx-2 mb-5" />
							</div>
						</form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Personas;

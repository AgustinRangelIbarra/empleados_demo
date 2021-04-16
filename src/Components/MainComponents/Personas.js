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
	const { state, addPerson } = contextPeople;

	useEffect(() => {
		ls.setItem("personas", JSON.stringify(state));
	}, [state]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (nombre.trim().length < 1 || apellido.trim().length < 1 || fecha.trim().length < 1) return;

		const newPerson = {
			...valueForms,
			id: new Date().getTime(),
		};
		addPerson(newPerson);
		// console.log(newPerson);
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
												<Button variant="warning" size="sm" type="submit">
													Editar
												</Button>
												<Button variant="danger" size="sm" type="submit">
													Eliminar
												</Button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				</Col>

				<Col>
					<div>
						<h3 className="mt-5">Detalles de la Persona</h3>
						<Form className="d-flex flex-column mx-5" onSubmit={handleSubmit}>
							<Row>
								<Col>
{/* 									<Form.Group>
										<Form.Label>ID:</Form.Label>
										<Form.Control
											type="text"
											readOnly
											required
											placeholder="ID automático"
										/>
									</Form.Group> */}
								</Col>
								<Col>
									<Form.Group>
										<Form.Label>Fecha de Nacimiento:</Form.Label>
										<Form.Control type="date" required onChange={handleChange} />
									</Form.Group>
								</Col>
							</Row>
							<br />
							<Row>
								<Col>
									<Form.Group>
										<Form.Label>Nombre</Form.Label>
										<Form.Control type="text" required onChange={handleChange} />
									</Form.Group>
								</Col>
								<Col>
									<Form.Group>
										<Form.Label>Apellido</Form.Label>
										<Form.Control type="text" required onChange={handleChange} />
									</Form.Group>
								</Col>
							</Row>
							<Row className="d-flex flex-row justify-content-center align-items-center mt-5">
								<Button variant="dark" size="lg" style={{ margin: "auto" }}>
									Agregar Registro
								</Button>
							</Row>
						</Form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Personas;

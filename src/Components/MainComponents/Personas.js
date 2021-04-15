import React, { useState } from "react";
import { Container, Col, Row, Form, Button, Table } from "react-bootstrap";

import "../styles/Persona.css";

export default function Personas() {
	const [personas, setPersonas] = useState(
		window.localStorage.getItem('text')
	);
	const [newPersona, setNewPersona] = useState("");
	const [updatePersona, setUpdatePersona] = useState("");

	const setLocalStorage = (value) => {
		try {
			setPersonas(value);
			window.localStorage.setItem('text', value)
		} catch (error) {
			console.log(error)
		}
	};

	// const handleAgregar = () => {};

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
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</Col>

				<Col className="">
					<div className="btn-add-registro d-flex">
						<Button
							variant="dark"
							className="ps-5 pe-5 mt-5 mb-4"
							size="lg"
							style={{ margin: "auto" }}
						>
							Agregar Registro
						</Button>
					</div>

					<div>
						<hr />
						<h3>Detalles de la Persona</h3>
						<Form className="d-flex flex-column mx-5">
							<Row>
								<Col>
									<Form.Group>
										<Form.Label>ID:</Form.Label>
										<Form.Control
											type="text"
											readOnly
											required
											placeholder="ID Generado de manera automática"
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group>
										<Form.Label>Fecha de Nacimiento:</Form.Label>
										<Form.Control type="date" required />
									</Form.Group>
								</Col>
							</Row>
							<br />
							<Row>
								<Col>
									<Form.Group>
										<Form.Label>Nombre</Form.Label>
										<Form.Control type="text" required />
									</Form.Group>
								</Col>
								<Col>
									<Form.Group>
										<Form.Label>Apellido</Form.Label>
										<Form.Control type="text" required />
									</Form.Group>
								</Col>
							</Row>
							<Row className="d-flex flex-row justify-content-center align-items-center mt-5">
								<Button
									onSubmit={setLocalStorage}
									variant="primary"
									size="sm"
									type="submit"
									className="btn-form"
								>
									Agregar
								</Button>
								<Button variant="warning" size="sm" type="submit" className="btn-form">
									Editar
								</Button>
								<Button variant="danger" size="sm" type="submit" className="btn-form">
									Eliminar
								</Button>
							</Row>
						</Form>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

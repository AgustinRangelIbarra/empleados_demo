import React from 'react'
import { Container, Col, Row, Form, Button, Table } from "react-bootstrap";

export default function EmpleadosPuestos() {
	return (
		<Container>
			<Row>
				<Col>
					<h1>Empleados-Puestos</h1>
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
									<th>Persona</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
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
						<h3>Formulario Vista</h3>
						<Form className="d-flex flex-column mx-5">
							<Row>
								<Col>
									<Form.Group>
										<Form.Label>ID</Form.Label>
										<Form.Control type="text" required />
									</Form.Group>
								</Col>
								<Col>
									<Form.Group>
										<Form.Label>Puesto</Form.Label>
										<Form.Control type="text" required />
									</Form.Group>
								</Col>
							</Row>{" "}
							<br />
							<Row>
								<Form.Group>
									<Form.Label>Persona:</Form.Label>
									<Form.Control type="text" required />
								</Form.Group>
							</Row>
							<Row className="d-flex flex-row justify-content-center align-items-center mt-5">
								<Button variant="primary" size="sm" type="submit" className="btn-form">
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

import React from 'react'
import { Container, Col, Row, Form, Button, Table  } from 'react-bootstrap'

export default function Puestos() {
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
									<th>Nombre</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
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
						<h3>Detalle del Puesto</h3>
						<Form className="d-flex flex-column mx-5">
							<Row>
								<Col>
									<Form.Group>
										<Form.Label>ID:</Form.Label>
										<Form.Control
											type="text"
											required
											readOnly
											placeholder="Id Asignado Automaticamente"
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group>
										<Form.Label>Nombre del Puesto:</Form.Label>
										<Form.Control type="text" required />
									</Form.Group>
								</Col>
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

import { useContext } from "react";
import { puestoContext } from "../Components/Context/PuestoContext/puestoContext";
import { Table } from "react-bootstrap";

const TablaRegistros = () => {
	const contextPuesto = useContext(puestoContext);
	const { state, deletePuesto } = contextPuesto;

	const handleEditar = (id) => {
		// setToggleUpdateValues(() => !toggleUpdateValues);
		// getPuesto(id);

		// const valueInput = inputPuesto.current;
	};

	return (
		<div>
			{state.length ? (
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>ID</th>
							<th>Puesto</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{state.map((registro) => (
							<tr>
								<td>{registro.id}</td>
								<td>{registro.puesto}</td>
								<td>
									<div className="d-flex flex-column justify-content-center ">
										<button
											type="submit"
											value="Editar"
											className="btn btn-warning btn-sm"
											onClick={() => handleEditar(registro.id)}
											// key={registro.id}
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
						))}
					</tbody>
				</Table>
			) : (
				<div className="">
					<hr />
					<h3>No hay Registros aun.</h3>
				</div>
			)}
		</div>
	);
};

export default TablaRegistros;

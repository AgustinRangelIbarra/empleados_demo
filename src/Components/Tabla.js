import { useContext } from "react";
import { puestoContext } from "./Context/PuestoContext/puestoContext";
import { Table } from "react-bootstrap";
import TablaRegistro from "./TablaRegistro";

const TablaRegistros = () => {
	const contextPuesto = useContext(puestoContext);
	const { state } = contextPuesto;

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
							<TablaRegistro registro={registro} />
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
	);
};

export default TablaRegistros;

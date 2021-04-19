import { useContext } from 'react';
import { puestoContext  } from './Context/PuestoContext/puestoContext';

const TablaRegistro = ({ registro }) => {
	const contextPuesto = useContext(puestoContext);
	const { deletePuesto, getPuesto } = contextPuesto;

	return (
		<tr>
			<td>{registro.id}</td>
			<td>{registro.puesto}</td>
			<td>
				<div className="d-flex flex-column justify-content-center ">
					<button
						type="submit"
						value="Editar"
						className="btn btn-warning btn-sm"
						onClick={() => getPuesto(registro.id)}
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
	);
};

export default TablaRegistro;

import React from "react";

import { Link } from "react-router-dom";
import './styles/Nav.css'

export default function Nav() {
	return (
		<nav className="nav">
			<ul className="nav-links">
				<Link to="/personas/">
					<h3 className="nav-link-item">Personas</h3>
				</Link>
				<Link to="/puestos/">
					<h3 className="nav-link-item">Puestos</h3>
				</Link>
				<Link to="/empleados/">
					<h3 className="nav-link-item">Empleados-Puestos</h3>
				</Link>
			</ul>
		</nav>
	);
}

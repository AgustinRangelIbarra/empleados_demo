import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Puestos from "./Components/MainComponents/Puestos";
import EmpleadosPuestos from "./Components/MainComponents/EmpleadosPuestos";
import Personas from "./Components/MainComponents/Personas";
import PeopleState from "./Components/Context/PeopleContext/PeopleState";
import PuestoState from "./Components/Context/PuestoContext/PuestoState";

function App() {
	return (
		<PeopleState>
			<PuestoState>
				<Router>
					<Nav />
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/personas/" component={Personas} />
						<Route path="/puestos/" component={Puestos} />
						<Route path="/empleados/" component={EmpleadosPuestos} />
					</Switch>
				</Router>
			</PuestoState>
		</PeopleState>
	);
}

const Home = () => {
	return (
		<div>
			<h1>^ Home Page ^</h1>
		</div>
	);
};

export default App;

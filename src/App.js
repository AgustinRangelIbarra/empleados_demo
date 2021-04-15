import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Puestos from "./Components/MainComponents/Puestos";
import EmpleadosPuestos from "./Components/MainComponents/EmpleadosPuestos";
import Personas from "./Components/MainComponents/Personas";

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/personas/" component={Personas} />
				<Route path="/puestos/" component={Puestos} />
				<Route path="/empleados/" component={EmpleadosPuestos} />
			</Switch>
		</Router>
	);
}

const Home = () => {
	return (
		<div>
			<h1>^ Selecciona Uno ^</h1>
		</div>
	);
};

export default App;

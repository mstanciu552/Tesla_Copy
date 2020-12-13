import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Production from './components/Production'
import Model from './components/ModelTemplate'
import SolarPanels from './components/SolarPanels'
import Footer from './components/Footer'

const App = () => {

	

	return (
		<div>
			<Router>
				<Switch>
						<Route path="/model-x" component={() => <Model type="x"></Model>} />
						<Route path="/model-y" component={() => <Model type="y"></Model>} />
						<Route path="/model-s" component={() => <Model type="s"></Model>} />
						<Route path="/model-3" component={() => <Model type="3"></Model>} />
						<Route path="/solar_panels" component={SolarPanels}></Route>
						<Route path="/products" component={Production} />   
						<Route path="/about" component={About} />   
						<Route path="/" component={Home} />   
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;

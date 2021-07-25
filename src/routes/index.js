import {
	HashRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Home from '../pages/home';
import About from '../pages/about';
import Menu from '../pages/menu';
import FoodBlogs from '../pages/foodblogs';

export default function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/menu">
						<Menu />
					</Route>
					<Route path="/blogs">
						<FoodBlogs />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
import { useState } from "react";
import "./styles/App.css";
import List from "./components/JobList";
import Filters from "./components/Filters";

function App() {
	const [filter, setFilter] = useState([]);

	const test = () => {
		// filter.forEach((filter) => {
		// 	console.log(filter);
		// });
		console.log(filter);
	};
	test();
	return (
		<div className="App">
			<header>
				<Filters list={filter} changeFilters={(filter) => setFilter(filter)} />
				<button onClick={() => setFilter([])}>Clear Filters</button>
			</header>
			<List list={filter} changeFilters={(filter) => setFilter(filter)} />
		</div>
	);
}

export default App;

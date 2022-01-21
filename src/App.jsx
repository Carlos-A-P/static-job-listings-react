import { useState, useEffect } from "react";
import "./styles/App.css";
import List from "./components/JobList";
import Filters from "./components/Filters";
import Data from "./helpers/data.js";

function App() {
	// list of filters
	const [filter, setFilter] = useState([]);
	// items with filters
	const [listings, setListings] = useState([]);
	// updateFilter
	const [removed, setRemoved] = useState(false);

	// useEffect(() => {
	// 	if (removed) setListings(Data);
	// 	// if (filter.length == 0 || removed) setListings(Data);
	// }, [removed]);

	useEffect(() => {
		if (filter.length == 0) setListings(Data);
	}, [filter]);

	const filterList = (tags) => {
		setListings(
			listings.filter((listing) =>
				[...listing.languages, ...listing.tools].includes(tags)
			)
		);
	};

	const removedFilter = (value) => {
		if (value) {
			setRemoved(true);
			setListings(Data);
			let arr = Data;
			filter.forEach((tag) => {
				arr = arr.filter((job) =>
					[...job.languages, ...job.tools].includes(tag)
				);
			});
			console.log(arr, filter);
			setListings(arr);
			console.log("==========");
			console.log(listings);
			// filter.forEach((tag) => {
			// 	console.log(tag);
			// 	console.log(listings);
			// 	setListings(
			// 		listings.filter((job) =>
			// 			[...job.languages, ...job.tools].includes(tag)
			// 		)
			// 	);
			// });
			// setRemoved(false);
		}
	};

	return (
		<div className="App">
			<header>
				<Filters
					update={(value) => removedFilter(value)}
					list={filter}
					changeFilters={(filter) => setFilter(filter)}
				/>
				<button onClick={() => setFilter([])}>Clear Filters</button>
			</header>
			<List
				list={filter}
				listing={listings}
				changeFilters={(filter) => setFilter(filter)}
				filtering={filterList}
			/>
		</div>
	);
}

export default App;

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
	// set role and level
	const [experience, setExperience] = useState({ role: "", level: "" });

	useEffect(() => {
		if (filter.length == 0) setListings(Data);
	}, [filter]);

	useEffect(() => {
		removedFilter();
		setRemoved(false);
	}, [removed]);

	const filterList = (tags, type) => {
		if (type === "role") {
			setListings(listings.filter((job) => job.role === tags));
			setExperience({ ...experience, role: tags });
		} else if (type === "level") {
			setListings(listings.filter((job) => job.level === tags));
			setExperience({ ...experience, level: tags });
		} else if (type === "skills") {
			setListings(
				listings.filter((listing) =>
					[...listing.languages, ...listing.tools].includes(tags)
				)
			);
		}
	};

	const removedFilter = () => {
		// reset experience
		if (!filter.includes(experience.role)) {
			setExperience({ ...experience, role: "" });
		}
		if (!filter.includes(experience.level)) {
			setExperience({ ...experience, level: "" });
		}

		let arr = Data;

		// filter by technology
		filter.forEach((tag) => {
			if (tag !== experience.role && tag !== experience.level) {
				arr = arr.filter((job) =>
					[...job.languages, ...job.tools].includes(tag)
				);
			}
		});

		// filter by experience
		if (experience.role !== "") {
			arr = arr.filter((job) => job.role === experience.role);
		}

		if (experience.level !== "") {
			arr = arr.filter((job) => job.level === experience.level);
		}

		setListings(arr);
	};

	return (
		<div className="App">
			<header>
				<Filters
					update={(value) => setRemoved(value)}
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

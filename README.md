```JavaScript
{[...job.languages, ...job.tools].map((skills, index) => {
	return (
		<li key={index}>
			<button
				className="tags"
				onClick={() => addTag(skills, "skills")}
			>
				{skills}
			</button>
		</li>
	);
})}
```

```JavaScript

import { useState, useEffect } from "react";
import "./styles/App.css";
import List from "./components/JobList";
import Filters from "./components/Filters";
import Data from "./helpers/data.js";
import Header from "./components/Header";

function App() {
// list of filters
const [filter, setFilter] = useState([]);
// items with filters
const [listings, setListings] = useState([]);
// updateFilter
const [removed, setRemoved] = useState(false);
// set role and level
// const [experience, setExperience] = useState({ role: null, level: null });
const [role, setRole] = useState(null);
const [level, setLevel] = useState(null);

    useEffect(() => {
    	if (filter.length === 0) setListings(Data);
    	console.log("filter changed: ", filter);
    }, [filter]);

    useEffect(() => {
    	removedFilter();
    	setRemoved(false);
    	console.log("removed", removed);
    }, [removed]);

    const filterList = (tags, type) => {
    	if (type === "role") {
    		setListings(listings.filter((job) => job.role === tags));
    		setRole(tags);
    		// setExperience({ ...experience, role: tags });
    	} else if (type === "level") {
    		setListings(listings.filter((job) => job.level === tags));
    		setLevel(tags);
    		// setExperience({ ...experience, level: tags });
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
    	if (!filter.includes(role) && role !== null) {
    		setRole(null);
    	}
    	if (filter.includes(level) === false && level !== null) {
    		setLevel(null);
    	}
    	console.log("==============================");

    	let arr = Data;

    	// filter by technology
    	filter.forEach((tag) => {
    		if (tag !== role && tag !== level) {
    			arr = arr.filter((job) =>
    				[...job.languages, ...job.tools].includes(tag)
    			);
    		}
    	});

    	// filter by experience
    	if (role !== null) {
    		arr = arr.filter((job) => job.role === role);
    	}

    	if (level !== null) {
    		arr = arr.filter((job) => job.level === level);
    	}
    	setListings(arr);
    };

    return (
    	<main className="App">
    		<header>
    			<Header />
    			<Filters
    				className={filter.length === 0 ? "hidden" : ""}
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
    	</main>
    );

}

export default App;

```

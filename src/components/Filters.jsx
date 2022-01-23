import React from "react";
import "../styles/filters.css";

export default function Filters({ list, changeFilters, update }) {
	const removeTag = (tag) => {
		const removeArr = [...list].filter((x) => x !== tag);
		changeFilters(removeArr);
		update(true);
	};

	return (
		<div>
			<ul>
				{list.map((tag, index) => {
					return (
						<li key={index}>
							<p>{tag}</p>
							<button onClick={() => removeTag(tag)}>remove</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

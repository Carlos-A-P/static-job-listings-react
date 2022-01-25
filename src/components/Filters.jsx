import React from "react";
import "../styles/filters.css";

export default function Filters({ list, changeFilters, update }) {
	const removeTag = (tag) => {
		const removeArr = [...list].filter((x) => x !== tag);
		changeFilters(removeArr);
		update(true);
	};

	return (
		<div className="wrap">
			<div
				className="filter-wrap"
				style={{ display: `${list.length === 0 ? "none" : "flex"}` }}
			>
				<ul className="tag-list">
					{list.map((tag, index) => {
						return (
							<li className="tag" key={index}>
								<p>{tag}</p>
								<button
									className="filter-remove"
									onClick={() => removeTag(tag)}
								></button>
							</li>
						);
					})}
				</ul>
				<button className="clear-filter" onClick={() => changeFilters([])}>
					Clear
				</button>
			</div>
		</div>
	);
}

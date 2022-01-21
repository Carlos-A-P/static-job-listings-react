import React from "react";

export default function Filters(props) {
	const removeTag = (tag) => {
		const removeArr = [...props.list].filter((x) => x !== tag);
		props.changeFilters(removeArr);
		props.update(true);
	};

	return (
		<div>
			<ul>
				{props.list.map((tag, index) => {
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

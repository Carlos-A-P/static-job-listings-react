import React from "react";
import Data from "../helpers/data.js";

export default function JobList(props) {
	const test = () => {
		Data.forEach((job) => {
			// console.log(job.company);
		});
	};
	test();

	const addTag = (tag) => {
		if (!props.list.includes(tag)) {
			props.changeFilters([...props.list, tag]);
		}
	};

	return (
		<div className="job-list">
			{Data.filter((item) => {
				if (props.list[0] === undefined) {
					console.log(item);
					return item;
				} else if (
					props.list.includes(item.role) ||
					props.list.includes(item.level) ||
					props.list.includes(item)
				) {
					return item;
				}
				item.languages.map((x) => {
					if (props.list.includes(x)) {
						return item;
					}
				});
			}).map((job) => {
				return (
					<div className="card" key={job.id}>
						<img src={job.logo} alt={job.company} />
						<div className="card-description">
							<div className="card-header">
								<p className="company">{job.company}</p>
								<div className="header_tags">
									{job.new && <p className="new">NEW!</p>}
									{job.featured && <p className="featured">FEATURED</p>}
								</div>
							</div>
							<p className="card-title">{job.position}</p>
							<ul className="short-description">
								<li>{job.postedAt}</li>
								<li>{job.contract}</li>
								<li>{job.location}</li>
							</ul>
						</div>
						<div className="tags">
							<ul className="tags">
								<li>
									<button onClick={() => addTag(job.role)}>{job.role}</button>
								</li>
								<li>
									<button onClick={() => addTag(job.level)}>{job.level}</button>
								</li>
								{job.languages.map((lang, index) => {
									return (
										<li key={index}>
											<button onClick={() => addTag(lang)}>{lang}</button>
										</li>
									);
								})}
								{job.tools.map((tools, index) => {
									return (
										<li key={index}>
											<button onClick={() => addTag(tools)}>{tools}</button>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				);
			})}
		</div>
	);
}

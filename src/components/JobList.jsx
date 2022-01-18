import React from "react";
import Data from "../helpers/data.js";
// import Card from "./Card";
import photosnap from "../assets/photosnap.svg";

export default function JobList() {
	const test = () => {
		Data.forEach((job) => {
			console.log(job.company);
		});
	};
	test();

	return (
		<div className="job-list">
			{Data.map((job) => {
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
									<button>{job.role}</button>
								</li>
								<li>
									<button>{job.level}</button>
								</li>
								{job.languages.map((lang, index) => {
									return (
										<li key={index}>
											<button>{lang}</button>
										</li>
									);
								})}
								{job.tools.map((tools, index) => {
									return (
										<li key={index}>
											<button>{tools}</button>
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

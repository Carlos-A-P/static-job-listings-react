import React from "react";
import "../styles/joblist.css";

export default function JobList(props) {
	const addTag = (tag, type) => {
		// if tag isn't in filter list then add it
		if (!props.list.includes(tag)) {
			props.changeFilters([...props.list, tag]);
		}
		props.filtering(tag, type);
	};

	return (
		<div className="job-list">
			{props.listing.map((job) => {
				return (
					<div
						className={`card ${job.new ? "new" : ""} ${
							job.featured ? "featured" : ""
						}`}
						key={job.id}
					>
						<img src={job.logo} alt={job.company} />
						<div className="card-description">
							<div className="card-header">
								<p className="company">{job.company}</p>
								<div className="header_tags">
									{job.new && <p className="new-job feat">NEW!</p>}
									{job.featured && <p className="feat-job feat">FEATURED</p>}
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
									<button onClick={() => addTag(job.role, "role")}>
										{job.role}
									</button>
								</li>
								<li>
									<button onClick={() => addTag(job.level, "level")}>
										{job.level}
									</button>
								</li>
								{job.languages.map((lang, index) => {
									return (
										<li key={index}>
											<button onClick={() => addTag(lang, "skills")}>
												{lang}
											</button>
										</li>
									);
								})}
								{job.tools.map((tools, index) => {
									return (
										<li key={index}>
											<button onClick={() => addTag(tools, "skills")}>
												{tools}
											</button>
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

import React from "react";
import photosnap from "../assets/photosnap.svg";

export default function Card(props) {
	return (
		<div className="card">
			<img src={photosnap} alt="Photosnap" />
			<div className="card-description">
				<div className="card-header">
					<p>Photosnap</p>
					<div className="header_tags">
						<p className="new">NEW!</p>
						<p className="featured">FEATURED</p>
					</div>
				</div>
				<p className="card-title">Senior Frontend Developer</p>
				<ul className="short-description">
					<li>1d ago</li>
					<li>Full Time</li>
					<li>USA only</li>
				</ul>
			</div>
			<div className="tags">
				<ul className="tags">
					<li>
						<button>Front end</button>
					</li>
					<li>
						<button>Senior</button>
					</li>
					<li>
						<button>HTML</button>
					</li>
					<li>
						<button>CSS</button>
					</li>
					<li>
						<button>JavaScript</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

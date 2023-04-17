import React from "react";
import { Gig } from "./Gigs";
import "../styles/Gigs.css";
import { Link } from "react-router-dom";

type GigListProps = {
	gigs: Gig[];
};

export default function GigList({ gigs }: GigListProps) {
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		//timeZoneName: "long",
	};

	return (
		<div>
			<h2>Upcoming Gigs</h2>
			<ul>
				{gigs
					.sort((a, b) => {
						return Date.parse(a?.dateAndTime) - Date.parse(b?.dateAndTime);
					})
					.map((gig) => (
						<li key={gig?.title} onClick={() => gig?.link}>
							{
								// TODO: add tyoes for toLocaleDateString arguments
								new Date(gig?.dateAndTime).toLocaleDateString(
									"en-GB",
									//@ts-ignore
									options
								)
							}
							<Link to={gig?.link}> {gig?.title}</Link>
						</li>
					))}
			</ul>
		</div>
	);
}

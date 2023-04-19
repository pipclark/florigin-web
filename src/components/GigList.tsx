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

	console.log(gigs);

	return (
		<div>
			<h2>Upcoming Gigs</h2>
			<ul className="gigList">
				{gigs
					.sort((a, b) => {
						return Date.parse(a?.dateAndTime) - Date.parse(b?.dateAndTime);
					})
					.map((gig) => (
						<li className="gigItem" key={gig?.title} onClick={() => gig?.link}>
							<ul className="gigDetails">
								<li className="dateTime">
									{
										// TODO: add tyoes for toLocaleDateString arguments
										new Date(gig?.dateAndTime).toLocaleDateString(
											"en-GB",
											//@ts-ignore
											options
										)
									}
								</li>
								<li className="cityCountry">{gig.citycountry}</li>
								<li className="venue">
									<Link to={gig?.link}> {gig?.title}</Link>
								</li>
							</ul>
						</li>
					))}
			</ul>
		</div>
	);
}
function getCityCountry(arg0: number, arg1: number) {
	throw new Error("Function not implemented.");
}

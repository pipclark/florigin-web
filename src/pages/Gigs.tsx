import React from "react";
import GigsList from "../components/Gigs";
import { contentfulUrl } from "../urls";

export default function Gigs() {
	return (
		<div>
			<GigsList
				contentfulUrl={contentfulUrl}
				displayMap={true}
				displayPastGigs={true}
			></GigsList>
		</div>
	);
}

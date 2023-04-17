import React from "react";
import GigsList from "../components/Gigs";
import RandomPhoto from "../components/RandomPhoto";
import { contentfulUrl } from "../urls";

export default function Home() {
	return (
		<div>
			<GigsList contentfulUrl={contentfulUrl}></GigsList>

			<RandomPhoto contentfulUrl={contentfulUrl} />
		</div>
	);
}

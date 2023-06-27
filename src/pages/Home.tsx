import React from "react";
import GigsList from "../components/Gigs";
import NewsItems from "../components/NewsItems";
import RandomPhoto from "../components/RandomPhoto";
import { contentfulUrl } from "../urls";

export default function Home() {
	return (
		<div>
			<GigsList
				contentfulUrl={contentfulUrl}
				displayMap={false}
				displayPastGigs={false}
			></GigsList>

			<RandomPhoto contentfulUrl={contentfulUrl} />

			<NewsItems
				contentfulUrl={contentfulUrl}
				displayLatestOnly={true}
			></NewsItems>
		</div>
	);
}

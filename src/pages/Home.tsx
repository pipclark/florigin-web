import React from "react";
import GigsList from "../components/Gigs";
import PhotoBlock from "../components/PhotoBlock";
import { contentfulUrl } from "../urls";

export default function Home() {
	return (
		<div>
			<GigsList contentfulUrl={contentfulUrl}></GigsList>

			<PhotoBlock contentfulUrl={contentfulUrl} />
		</div>
	);
}

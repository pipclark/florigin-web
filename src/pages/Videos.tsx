import React from "react";
import VideoCarousel from "../components/VideoCarousel";
import { contentfulUrl } from "../urls";

export default function Videos() {
	return (
		<div>
			<h2>Videos</h2>
			<VideoCarousel contentfulUrl={contentfulUrl}></VideoCarousel>
		</div>
	);
}

import React from "react";
import NewsItems from "../components/NewsItems";
import { contentfulUrl } from "../urls";

export default function News() {
	return (
		<div>
			<NewsItems contentfulUrl={contentfulUrl}></NewsItems>
		</div>
	);
}

import React from "react";
import PhotoBlock from "../components/PhotoBlock";
import { contentfulUrl } from "../urls";

export default function Photos() {
	return (
		<div>
			<h1>Photos</h1>
			<PhotoBlock contentfulUrl={contentfulUrl} />
		</div>
	);
}

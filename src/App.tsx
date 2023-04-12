import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PhotoBlock from "./components/photoBlock";
import GigsList from "./components/gigs";
import GigMap from "./components/gigMap";

function App() {
	const contentfulUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`;

	return (
		<div className="App">
			<header className="App-header">
				<h1>Florigin</h1>
			</header>

			<GigsList contentfulUrl={contentfulUrl}></GigsList>

			<PhotoBlock contentfulUrl={contentfulUrl} />
		</div>
	);
}

export default App;

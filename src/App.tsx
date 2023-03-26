import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PhotoBlock from "./components/photoBlock";
import Gigs from "./components/gigs";

function App() {
	const contentfulUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`;

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>

			<Gigs contentfulUrl={contentfulUrl}></Gigs>
			<PhotoBlock contentfulUrl={contentfulUrl} />
		</div>
	);
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PhotoBlock from "./components/photoBlock";
import { createClient } from "contentful";

function App() {
	// const contentful = require("contentful");

	// const client = createClient({
	// 	//@ts-ignore
	// 	space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
	// 	//@ts-ignore
	// 	accessToken: process.env.REACT_APP_IS_PREVIEW
	// 		? process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN
	// 		: process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN,
	// 	host: process.env.REACT_APP_IS_PREVIEW
	// 		? "preview.contentful.com"
	// 		: "cdn.contentful.com",
	// });

	// const photos = client.getEntries().then(function (entries) {
	// 	// log the title for all the entries that have it
	// 	entries.items.forEach(function (entry) {
	// 		if (entry.fields.productName) {
	// 			console.log(entry.fields.productName);
	// 		}
	// 	});
	// });
	// console.log(photos);

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

			<PhotoBlock />
		</div>
	);
}

export default App;

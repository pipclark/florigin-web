import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="header">
					<Header />
					<h1>Florigin</h1>
				</header>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

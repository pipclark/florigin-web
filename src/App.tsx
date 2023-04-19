import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gigs from "./pages/Gigs";
import About from "./pages/About";
import Photos from "./pages/Photos";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Videos from "./Videos";
import Merch from "./pages/Merch";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/gigs" element={<Gigs />} />
						<Route path="/photos" element={<Photos />} />
						<Route path="/merch" element={<Merch />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/about" element={<About />} />
						<Route path="/news" element={<News />} />
						<Route path="/videos" element={<Videos />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

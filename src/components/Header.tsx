import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import "../styles/Header.css";

function Header() {
	const [isOpen, setOpen] = useState(false);

	return (
		<header className={isOpen ? "active" : ""}>
			<nav className={isOpen ? "active" : ""}>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/gigs">Gigs</NavLink>
					</li>
					<li>
						<NavLink to="/photos">Photos</NavLink>
					</li>
					<li>
						<NavLink to="/merch">Merch</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/news">News</NavLink>
					</li>
					<li>
						<NavLink to="/videos">Videos</NavLink>
					</li>
				</ul>
			</nav>
			<div className="burger">
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</div>
			<h1>Florigin</h1>
		</header>
	);
}

export default Header;

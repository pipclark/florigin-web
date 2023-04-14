import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";

function Header() {
	const [isOpen, setOpen] = useState(false);

	return (
		<header>
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
		</header>
	);
}

export default Header;

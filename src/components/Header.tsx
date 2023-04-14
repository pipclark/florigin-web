import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
	return (
		<header>
			<nav>
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
		</header>
	);
}

export default Header;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faApple,
	faInstagram,
	faSoundcloud,
	faSpotify,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
	const [isOpen, setOpen] = useState(false);

	return (
		<header className={isOpen ? "active" : ""}>
			<nav className={isOpen ? "active" : ""} onClick={() => setOpen(false)}>
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
			<div className="socialIcons">
				<a href="https://www.youtube.com/channel/UCw-4Hs42k567JbGiEGyBIFw">
					<FontAwesomeIcon icon={faYoutube} />
				</a>
				<a href="https://open.spotify.com/artist/2q5bQQI9tAIkAgzzU5JzdA?si=U8WUFT8sRE-IGR7IMfgu-g&referral=labelaffiliate&utm_source=1011lwISp5nj&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate&nd=1">
					<FontAwesomeIcon icon={faSpotify} />
				</a>
				<a href="https://www.instagram.com/floriginmusic/">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a href="https://music.apple.com/us/artist/florigin/1522550336">
					<FontAwesomeIcon icon={faApple} />
				</a>
				<a href="https://soundcloud.com/user-412069159">
					<FontAwesomeIcon icon={faSoundcloud} />
				</a>
			</div>
		</header>
	);
}

export default Header;

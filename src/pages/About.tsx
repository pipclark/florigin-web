import React, { useState } from "react";
import "../styles/About.css";
import { getContentful } from "../lib/getContentful";
import AboutContent from "../components/AboutContent";
import { contentfulUrl } from "../urls";
import RandomPhoto from "../components/RandomPhoto";

export default function About() {
	return (
		<div className="about">
			<h2>About Us</h2>
			<AboutContent contentfulUrl={contentfulUrl}></AboutContent>
			<RandomPhoto contentfulUrl={contentfulUrl}></RandomPhoto>
		</div>
	);
}

import React from "react";
import { render, screen } from "@testing-library/react";
import GigsList from "../../components/Gigs";
import { BrowserRouter } from "react-router-dom";

const mockContentfulUrl = "www.contentful.example.com";

test("list of gigs and info displayed", async () => {
	// needs wrapping in BrowserRouter as GigsList has links in it
	render(
		<BrowserRouter>
			<GigsList
				contentfulUrl={mockContentfulUrl}
				displayMap={false}
				displayPastGigs={false}
			/>
		</BrowserRouter>
	);

	//const linkElement = screen.getByText(/Lido/i);
	const gigName = await screen.findByText("Lido");
	expect(gigName).toBeInTheDocument();
});

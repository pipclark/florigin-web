import React from "react";
import { render, screen } from "@testing-library/react";
import GigsList from "../../components/Gigs";
import { BrowserRouter } from "react-router-dom";

const mockContentfulUrl = "www.contentful.example.com";

describe("list of gigs and info displayed", () => {
	test("test only future gigs displayed", async () => {
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
		const futureGigName = await screen.findByText("Lido");
		const pastGigName = screen.queryByText("Glastonbury");
		expect(futureGigName).toBeInTheDocument();
		expect(pastGigName).not.toBeInTheDocument();
	});
	test("test both future and past gigs displayed", async () => {
		// needs wrapping in BrowserRouter as GigsList has links in it
		render(
			<BrowserRouter>
				<GigsList
					contentfulUrl={mockContentfulUrl}
					displayMap={false}
					displayPastGigs={true}
				/>
			</BrowserRouter>
		);

		//const linkElement = screen.getByText(/Lido/i);
		const futureGigName = await screen.findByText("Lido");
		const pastGigName = screen.queryByText("Glastonbury");
		expect(futureGigName).toBeInTheDocument();
		expect(pastGigName).toBeInTheDocument();
	});
});

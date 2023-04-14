import React from "react";
import { render, screen } from "@testing-library/react";
import GigsList from "../../components/Gigs";

test("renders learn react link", () => {
	const mockContentfulUrl = "www.contentFul.example.com";

	// intercept with msw https://mswjs.io/docs/getting-started/integrate/node

	render(<GigsList contentfulUrl={mockContentfulUrl} />);
	const linkElement = screen.getByText(/Gigs/i);
	expect(linkElement).toBeInTheDocument();
});

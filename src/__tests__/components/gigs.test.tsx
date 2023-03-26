import React from "react";
import { render, screen } from "@testing-library/react";
import Gigs from "../../components/gigs";

test("renders learn react link", () => {
	const mockContentfulUrl = "www.contentFul.example.com";

	// intercept with msw https://mswjs.io/docs/getting-started/integrate/node

	render(<Gigs contentfulUrl={mockContentfulUrl} />);
	const linkElement = screen.getByText(/Gigs/i);
	expect(linkElement).toBeInTheDocument();
});

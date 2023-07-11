import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Florigin title", () => {
	render(<App />);
	const titleElement = screen.getByText(/Florigin/i);
	expect(titleElement).toBeInTheDocument();
});

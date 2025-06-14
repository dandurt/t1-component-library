import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
// import * as log from "../../infrastructure/analytics/logEvent";

describe("Card component", () => {
	// beforeEach(() => {
	// 	jest.spyOn(log, "logEvent").mockImplementation(() => {});
	// });

	// afterEach(() => {
	// 	jest.clearAllMocks();
	// });

	test("renders header, body and footer", () => {
		render(
			<Card header={<div>Header</div>} footer={<div>Footer</div>}>
				Body content
			</Card>
		);

		expect(screen.getByText("Header")).toBeInTheDocument();
		expect(screen.getByText("Body content")).toBeInTheDocument();
		expect(screen.getByText("Footer")).toBeInTheDocument();
	});

	test("renders image if provided", () => {
		render(<Card image='https://via.placeholder.com/150'>Body</Card>);
		const image = screen.getByAltText("Card image") as HTMLImageElement;
		expect(image).toBeInTheDocument();
		expect(image.src).toContain("https://via.placeholder.com/150");
	});

	// test("logs event on render", () => {
	// 	render(<Card>Render log test</Card>);
	// 	expect(log.logEvent).toHaveBeenCalledWith({
	// 		component: "Card",
	// 		event: "render",
	// 	});
	// });
});

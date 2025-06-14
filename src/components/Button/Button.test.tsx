import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
	test("renders with label", () => {
		render(<Button label='Click me' />);
		expect(screen.getByText("Click me")).toBeInTheDocument();
	});

	test("call onClick event", () => {
		const handleClick = jest.fn();
		render(<Button label='Submit' onClick={handleClick} />);
		fireEvent.click(screen.getByText("Submit"));
		expect(handleClick).toHaveBeenCalled();
	});

	test("shows loading text when loading is true", () => {
		render(<Button label='Send' loading />);
		expect(screen.getByText(/loading/i)).toBeInTheDocument();
	});

	test("disables the button when disabled prop is true", () => {
		const handleClick = jest.fn();
		render(<Button label='Disabled' disabled onClick={handleClick} />);
		const btn = screen.getByRole("button");
		expect(btn).toBeDisabled();
		fireEvent.click(btn);
		expect(handleClick).not.toHaveBeenCalled();
	});

	test("renders start and end icons", () => {
		render(
			<Button
				label='With Icons'
				startIcon={<span data-testid='start-icon'>★</span>}
				endIcon={<span data-testid='end-icon'>→</span>}
			/>
		);
		expect(screen.getByTestId("start-icon")).toBeInTheDocument();
		expect(screen.getByTestId("end-icon")).toBeInTheDocument();
	});
});

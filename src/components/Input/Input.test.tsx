import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
	test("renders with label and placeholder", () => {
		render(<Input label='Username' placeholder='Enter your username' />);
		expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText(/enter your username/i)
		).toBeInTheDocument();
	});

	test("changes value when typed", () => {
		render(<Input label='Email' />);
		const input = screen.getByLabelText(/email/i) as HTMLInputElement;

		fireEvent.change(input, { target: { value: "user@example.com" } });

		expect(input.value).toBe("user@example.com");
	});

	test("is disabled when disabled prop is true", () => {
		render(<Input label='Disabled' disabled />);
		const input = screen.getByLabelText(/disabled/i);
		expect(input).toBeDisabled();
	});

	test("applies validation classes", () => {
		const { rerender } = render(<Input label='Test' validation='error' />);
		const input = screen.getByLabelText(/test/i);
		expect(input).toHaveStyle("border-color: #d32f2f");

		rerender(<Input label='Test' validation='success' />);
		expect(input).toHaveStyle("border-color: #2e7d32");
	});
});

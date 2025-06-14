import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal component", () => {
	test("does not render when isOpen is false", () => {
		const { container } = render(<Modal isOpen={false} onClose={jest.fn()} />);
		expect(container.firstChild).toBeNull();
	});

	test("renders title and children when open", () => {
		render(
			<Modal isOpen={true} onClose={jest.fn()} title='Test Modal'>
				<p>Modal content</p>
			</Modal>
		);
		expect(screen.getByText("Test Modal")).toBeInTheDocument();
		expect(screen.getByText("Modal content")).toBeInTheDocument();
	});

	// test("calls onClose when clicking overlay", () => {
	// 	const onClose = jest.fn();
	// 	const { getByText } = render(
	// 		<Modal isOpen={true} onClose={onClose} title='Overlay Click Test'>
	// 			<p>Inside</p>
	// 		</Modal>
	// 	);
	// 	const overlay =
	// 		screen.getByText("Overlay Click Test").parentElement?.parentElement!;
	// 	fireEvent.click(overlay);
	// 	expect(onClose).toHaveBeenCalled();
	// });

	test("calls onClose when clicking close button", () => {
		const onClose = jest.fn();
		render(<Modal isOpen={true} onClose={onClose} title='Close Button Test' />);
		const closeButton = screen.getByLabelText("Close modal");
		fireEvent.click(closeButton);
		expect(onClose).toHaveBeenCalled();
	});

	test("renders footer if provided", () => {
		render(
			<Modal
				isOpen={true}
				onClose={jest.fn()}
				footer={<div>Footer content</div>}>
				<p>Body content</p>
			</Modal>
		);
		expect(screen.getByText("Footer content")).toBeInTheDocument();
	});
});

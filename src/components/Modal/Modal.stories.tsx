import React, { useState } from "react";
import Modal from "./Modal";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
	title: "Components/Modal",
	component: Modal,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState(true);
		return (
			<Modal
				isOpen={open}
				onClose={() => setOpen(false)}
				title='My Modal'
				footer={<button onClick={() => setOpen(false)}>Close</button>}>
				<p>This is the modal content.</p>
			</Modal>
		);
	},
};

export const Large: Story = {
	render: () => {
		const [open, setOpen] = useState(true);
		return (
			<Modal
				isOpen={open}
				onClose={() => setOpen(false)}
				title='Large Modal'
				size='large'>
				<p>Content for a large modal.</p>
			</Modal>
		);
	},
};

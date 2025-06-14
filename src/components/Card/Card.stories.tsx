import React from "react";
import Card from "./Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "outlined", "shadowed"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		header: <h3>Card Header</h3>,
		children: <p>This is the card body content.</p>,
		footer: <p>Card Footer</p>,
		variant: "default",
	},
};

export const WithImage: Story = {
	args: {
		image: "https://via.placeholder.com/600x200",
		header: <h3>Image Card</h3>,
		children: <p>Card with image and shadowed border.</p>,
		footer: <p>Footer here</p>,
		variant: "shadowed",
	},
};

export const Outlined: Story = {
	args: {
		header: <h4>Outlined Card</h4>,
		children: <p>Simple outlined card.</p>,
		variant: "outlined",
	},
};

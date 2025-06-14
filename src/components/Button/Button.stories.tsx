import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";
import { FaCheck, FaTimes } from "react-icons/fa";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: { control: "select", options: ["primary", "secondary", "danger"] },
		loading: { control: "boolean" },
		disabled: { control: "boolean" },
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		label: "Primary Button",
		variant: "primary",
	},
};

export const WithIcon: Story = {
	args: {
		label: "Save",
		variant: "primary",
		startIcon: <FaCheck />,
	},
};

export const Loading: Story = {
	args: {
		label: "Loading...",
		variant: "secondary",
		loading: true,
	},
};

export const Disabled: Story = {
	args: {
		label: "Disabled",
		disabled: true,
	},
};

export const DangerWithIcon: Story = {
	args: {
		label: "Delete",
		variant: "danger",
		endIcon: <FaTimes />,
	},
};

import React from "react";
import Input from "./Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
	title: "Components/Input",
	component: Input,
	tags: ["autodocs"],
	argTypes: {
		type: { control: "select", options: ["text", "email", "password"] },
		validation: { control: "select", options: ["default", "error", "success"] },
		disabled: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		label: "Username",
		placeholder: "Enter your username",
		validation: "default",
	},
};

export const WithError: Story = {
	args: {
		label: "Email",
		type: "email",
		placeholder: "invalid@example",
		validation: "error",
	},
};

export const Success: Story = {
	args: {
		label: "Password",
		type: "password",
		placeholder: "••••••••",
		validation: "success",
	},
};

export const Disabled: Story = {
	args: {
		label: "Disabled field",
		placeholder: "Unavailable",
		disabled: true,
	},
};

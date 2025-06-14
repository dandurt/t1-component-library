import React from "react";

export type ButtonVariant = "primary" | "secondary" | "danger";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	variant?: ButtonVariant;
	loading?: boolean;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
}

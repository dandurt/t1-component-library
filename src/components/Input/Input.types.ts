import React from "react";

export type InputType = "text" | "email" | "password";
export type ValidationState = "default" | "error" | "success";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	type?: InputType;
	validation?: ValidationState;
	disabled?: boolean;
	placeholder?: string;
}

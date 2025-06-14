import React from "react";

export type CardVariant = "default" | "outlined" | "shadowed";

export interface CardProps {
	header?: React.ReactNode;
	footer?: React.ReactNode;
	children?: React.ReactNode;
	image?: string;
	variant?: CardVariant;
}

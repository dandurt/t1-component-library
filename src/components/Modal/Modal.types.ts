import React from "react";

export type ModalSize = "small" | "medium" | "large";

export interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	size?: ModalSize;
	title?: string;
	children?: React.ReactNode;
	footer?: React.ReactNode;
}

import React, { useEffect } from "react";
import {
	Overlay,
	ModalContainer,
	ModalHeader,
	ModalBody,
	ModalFooter,
	CloseButton,
} from "./Modal.styled";
import { ModalProps } from "./Modal.types";
import { logEvent } from "@/core/analytics/logEvent";

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	size = "medium",
	title,
	children,
	footer,
}) => {
	useEffect(() => {
		if (isOpen) {
			logEvent({ component: "Modal", action: "render" });
		}
	}, [isOpen]);

	if (!isOpen) return null;

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			logEvent({ component: "Modal", action: "blur" });
			onClose();
		}
	};

	return (
		<Overlay onClick={handleOverlayClick}>
			<ModalContainer size={size}>
				<ModalHeader>
					<span>{title}</span>
					<CloseButton aria-label='Close modal' onClick={onClose}>
						×
					</CloseButton>
				</ModalHeader>
				<ModalBody>{children}</ModalBody>
				{footer && <ModalFooter>{footer}</ModalFooter>}
			</ModalContainer>
		</Overlay>
	);
};

export default Modal;

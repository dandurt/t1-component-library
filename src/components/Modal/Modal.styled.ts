import * as styledComponents from "styled-components";
const styled = styledComponents.default;
const { css } = styledComponents;

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.4);
	z-index: 999;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const sizeStyles = {
	small: css`
		width: 300px;
	`,
	medium: css`
		width: 500px;
	`,
	large: css`
		width: 800px;
	`,
};

export const ModalContainer = styled.div<{ size: string }>`
	background: white;
	border-radius: 8px;
	max-height: 90vh;
	overflow: hidden;
	${({ size }) => sizeStyles[size as keyof typeof sizeStyles]};
	box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.div`
	padding: 1rem;
	font-weight: bold;
	font-size: 1.2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #eee;
`;

export const ModalBody = styled.div`
	padding: 1rem;
`;

export const ModalFooter = styled.div`
	padding: 1rem;
	border-top: 1px solid #eee;
	text-align: right;
`;

export const CloseButton = styled.button`
	background: transparent;
	border: none;
	font-size: 1.2rem;
	cursor: pointer;
	color: #888;
`;

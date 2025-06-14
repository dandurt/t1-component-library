import styled, { css } from "styled-components";
import { ButtonVariant } from "./Button.types";

const variantStyles = {
	primary: css`
		background-color: #6200ee;
		color: white;

		&:hover {
			background-color: #3700b3;
		}
	`,
	secondary: css`
		background-color: #f1f1f1;
		color: #333;

		&:hover {
			background-color: #ddd;
		}
	`,
	danger: css`
		background-color: #d32f2f;
		color: white;

		&:hover {
			background-color: #b71c1c;
		}
	`,
};

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 0.6rem 1.2rem;
	font-weight: 600;
	border-radius: 4px;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	${({ variant }) => variantStyles[variant]}

	&:disabled {
		background-color: #ccc;
		color: #666;
		cursor: not-allowed;
	}
`;

import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
	margin-bottom: 0.5rem;
	font-weight: 600;
`;

const validationStyles = {
	default: css`
		border-color: #ccc;
	`,
	error: css`
		border-color: #d32f2f;
	`,
	success: css`
		border-color: #2e7d32;
	`,
};

export const StyledInput = styled.input<{ validation: string }>`
	padding: 0.5rem;
	border: 2px solid;
	border-radius: 4px;
	outline: none;
	transition: border-color 0.2s;

	${({ validation }) =>
		validationStyles[validation as keyof typeof validationStyles]}

	&:disabled {
		background: #f5f5f5;
		color: #888;
		cursor: not-allowed;
	}
`;

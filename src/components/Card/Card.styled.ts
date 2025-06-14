import styled, { css } from "styled-components";

export const StyledCard = styled.div<{ variant: string }>`
	border-radius: 8px;
	overflow: hidden;
	background: white;
	display: flex;
	flex-direction: column;

	${({ variant }) => {
		switch (variant) {
			case "outlined":
				return css`
					border: 1px solid #ddd;
				`;
			case "shadowed":
				return css`
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
				`;
			default:
				return css`
					border: none;
				`;
		}
	}}
`;

export const CardImage = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
`;

export const CardSection = styled.div`
	padding: 1rem;
	border-top: 1px solid #eee;

	&:first-child {
		border-top: none;
	}
`;

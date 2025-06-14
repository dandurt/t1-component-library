import React, { useEffect } from "react";
import { CardProps } from "./Card.types";
import { StyledCard, CardImage, CardSection } from "./Card.styled";
// import { logEvent } from "../../infrastructure/analytics/logEvent";

const Card: React.FC<CardProps> = ({
	header,
	image,
	children,
	footer,
	variant = "default",
}) => {
	useEffect(() => {
		// logEvent({ component: "Card", event: "render" });
	}, []);

	return (
		<StyledCard variant={variant}>
			{image && <CardImage src={image} alt='Card image' />}
			{header && <CardSection>{header}</CardSection>}
			{children && <CardSection>{children}</CardSection>}
			{footer && <CardSection>{footer}</CardSection>}
		</StyledCard>
	);
};

export default Card;

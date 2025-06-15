import React from "react";
import { ButtonProps } from "./Button.types";
import { logEvent } from "@/core/analytics/logEvent";
import { StyledButton } from "./Button.styled";

const Button = ({
	label,
	variant = "primary",
	loading = false,
	startIcon,
	endIcon,
	disabled,
	...props
}: ButtonProps) => {
	React.useEffect(() => {
		logEvent({ component: "Button", event: "render" });
	}, []);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!disabled) {
			logEvent({ component: "Button", event: "click" });
			props.onClick?.(e);
		}
	};

	return (
		<StyledButton
			variant={variant}
			disabled={disabled || loading}
			onClick={handleClick}
			{...props}>
			{loading ? (
				"Loading..."
			) : (
				<>
					{startIcon}
					{label}
					{endIcon}
				</>
			)}
		</StyledButton>
	);
};

export default Button;

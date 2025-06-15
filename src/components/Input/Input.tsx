import React, { useEffect, useId } from "react";
import { InputProps } from "./Input.types";
import { StyledWrapper, StyledLabel, StyledInput } from "./Input.styled";
import { logEvent } from "@/core/analytics/logEvent";

const Input: React.FC<InputProps> = ({
	label,
	type = "text",
	validation = "default",
	disabled = false,
	placeholder,
	...props
}) => {
	const inputId = useId();

	useEffect(() => {
		logEvent({ component: "Input", action: "render" });
	}, []);

	const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
		logEvent({ component: "Input", action: "click" });
		props.onClick?.(e);
	};

	return (
		<StyledWrapper>
			{label && <StyledLabel htmlFor={inputId}>{label}</StyledLabel>}
			<StyledInput
				id={inputId}
				{...props}
				type={type}
				validation={validation}
				disabled={disabled}
				placeholder={placeholder}
				onClick={handleClick}
			/>
		</StyledWrapper>
	);
};

export default Input;

import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Loader, StyledButton } from "./styled";

interface ButtonStringProps {
    type?: "button" | "submit" | "reset";
    size?: "tiny" | "xsmall" | "small" | "medium" | "large" | "xlarge";
    variant?: "soildBlue" | "soildBlack" | "soildWhiteBlue" | "soildWhiteBlack" | "outlineBlue" | "outlinewhite";
}

interface ButtonProps extends ButtonStringProps {
    label?: string;
    isDisabled?: boolean;
    isLoadiong?: boolean;
    isStatus?: boolean;
    isIcon?: boolean;
    onClick?: any;
}

export const Button = ({
    type = "button",
    label = "버튼",
    size = "medium",
    variant = "soildBlue",
    isDisabled = false,
    isLoadiong = false,
    isStatus = false,
    isIcon = false,
    ...props
}: ButtonProps) => {
    return (
        <StyledButton
            type={type}
            size={size}
            variant={variant}
            disabled={isDisabled}
            isLoadiong={isLoadiong}
            isStatus={isStatus}
            {...props}
        >
            {isIcon && !isLoadiong ? <AiFillHome className="button--icon" /> : null}

            {isLoadiong ? <Loader aria-label={"로딩아이콘"} /> : label}
        </StyledButton>
    );
};

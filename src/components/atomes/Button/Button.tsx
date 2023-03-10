import theme from "@/components/common/theme";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Loader, StyledButton, Variants } from "./ButtonStyle";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    size?: "tiny" | "xsmall" | "small" | "medium" | "large" | "xlarge";
    label?: string;
    variant?:
        | "soildBlue"
        | "soildBlack"
        | "soildWhiteBlue"
        | "soildWhiteBlack"
        | "outlineBlue"
        | "outlinewhite";
    isDisabled?: boolean;
    isLoadiong?: boolean;
    isStatus?: boolean;
    isIcon?: boolean;
    onClick?: () => void;
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
    const variantsStyle = Variants[variant];

    return (
        <StyledButton
            theme={theme}
            type={type}
            size={size}
            variantsStyle={variantsStyle}
            variant={variant}
            disabled={isDisabled}
            isLoadiong={isLoadiong}
            isStatus={isStatus}
            {...props}
        >
            {isIcon && !isLoadiong ? (
                <AiFillHome className="button--icon" />
            ) : null}

            {isLoadiong ? <Loader aria-label={"로딩아이콘"} /> : label}
        </StyledButton>
    );
};

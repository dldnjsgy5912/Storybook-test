import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Loader, SIZES, StyledButton, Variants } from "./ButtonStyle";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    size?: "tiny" | "xsmall" | "small" | "medium" | "large" | "xlarge";
    label?: string;
    variant:
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
    const sizeStyle = SIZES[size];
    const variantsStyle = Variants[variant];

    return (
        <StyledButton
            type={type}
            sizeStyle={sizeStyle}
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

            {isLoadiong ? <Loader /> : label}
        </StyledButton>
    );
};

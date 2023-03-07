import React from "react";
import { AiFillHome } from "react-icons/ai";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { SIZES, Variants } from "./ButtonStyle";

interface ButtonStyleProps {
    sizeStyle?: FlattenSimpleInterpolation;
    variantsStyle?: FlattenSimpleInterpolation;
    isLoadiong?: boolean;
    isStatus?: boolean;
    variant?: string;
}

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

const StyledButton = styled.button<ButtonStyleProps>`
    font-weight: 500;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

    ${({ sizeStyle }) => sizeStyle}

    ${({ variantsStyle }) => variantsStyle}

    ${({ isLoadiong }) =>
        isLoadiong &&
        css`
            pointer-events: none;
        `}

    ${({ isStatus, variant }) =>
        isStatus &&
        (variant === "soildBlue" ||
            "soildBlack" ||
            "soildWhiteBlue" ||
            "soildWhiteBlack")
            ? css`
                  pointer-events: none;
                  color: #101010;
                  background: #ededed;
              `
            : isStatus && (variant === "outlineBlue" || "outlinewhite")
            ? css`
                  pointer-events: none;
                  color: #707070;
                  background: #ffffff;
                  border: 1px solid #ededed;
              `
            : null}
`;

const Loader = styled.span`
    width: 16px;
    height: 16px;
    border: 2px solid #d9d9d9;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
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
            ) : (
                ""
            )}
            {isLoadiong ? <Loader /> : label}
        </StyledButton>
    );
};

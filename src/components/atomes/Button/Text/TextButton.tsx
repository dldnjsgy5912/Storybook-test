import React from "react";
import { AiFillHome } from "react-icons/ai";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { SIZES, Colors } from "./TextButtonStyle";

interface TextButtonStyleProps {
    fontWeight?: number;
    underline?: boolean;
    sizeStyle?: FlattenSimpleInterpolation;
    colorStyle?: FlattenSimpleInterpolation;
    variant?: string;
}
interface TextButtonStringProps {
    color?: "primary" | "secondary" | "green" | "gray";
    type?: "button" | "submit" | "reset";
    size?: "tiny" | "xsmall" | "small" | "medium" | "large" | "xlarge";
}
interface TextButtonProps extends TextButtonStringProps {
    fontWeight?: number;
    underline?: boolean;
    label?: string;
    isDisabled?: boolean;
    isIcon?: boolean;
    onClick?: any;
}

const StyledTextButton = styled.button<TextButtonStyleProps>`
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    background: none;
    border: none;
    &:disabled {
        pointer-events: none;
        opacity: 0.35;
    }
    &:active {
        opacity: 0.6;
    }
    font-weight: ${({ fontWeight }) => fontWeight};

    ${({ sizeStyle }) => sizeStyle}
    ${({ colorStyle }) => colorStyle}


    ${({ underline }) =>
        underline &&
        css`
            text-decoration: underline;
        `}
`;

export const TextButton = ({
    fontWeight = 400,
    underline = false,
    color = "primary",
    type = "button",
    label = "텍스트 버튼",
    size = "medium",
    isDisabled = false,
    isIcon = false,
    ...props
}: TextButtonProps) => {
    const sizeStyle = SIZES[size];
    const colorStyle = Colors[color];

    return (
        <StyledTextButton
            type={type}
            fontWeight={fontWeight}
            underline={underline}
            sizeStyle={sizeStyle}
            colorStyle={colorStyle}
            disabled={isDisabled}
            {...props}
        >
            {isIcon ? <AiFillHome className="button--icon" /> : ""}
            {label}
        </StyledTextButton>
    );
};

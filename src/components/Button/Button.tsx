import React from "react";
import { AiFillHome } from "react-icons/ai";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

const SIZES = {
    tiny: css`
        font-size: 12px;
        padding: 0px 8px;
        height: 32px;
    `,
    xsmall: css`
        font-size: 14px;
        padding: 0px 8px;
        height: 38px;
    `,
    small: css`
        font-size: 14px;
        padding: 0px 16px;
        height: 46px;
    `,
    medium: css`
        font-size: 16px;
        padding: 0px 16px;
        height: 52px;
    `,
    large: css`
        font-size: 16px;
        padding: 0px 16px;
        height: 56px;
    `,
    xlarge: css`
        font-size: 18px;
        padding: 0px 16px;
        height: 60px;
    `,
};
const SOILD = {
    blue: css`
        color: #ffffff;
        background-color: #0740e4;
        &:active {
            color: #ffffff;
            background-color: #2c5bea;
        }
        &:disabled {
            pointer-events: none;
            color: #ffffff;
            background-color: #ededed;
        }
    `,
    black: css`
        color: #ffffff;
        background-color: #101010;
        &:active {
            color: #ffffff;
            background-color: #555555;
        }
        &:disabled {
            pointer-events: none;
            color: #ffffff;
            background-color: #ededed;
        }
    `,
};

const OUTLINE = {
    blue: css`
        color: #0740e4;
        background-color: #fafbff;
        border: #e5ebfc 1px solid;
        &:active {
            color: #a7a7a7;
            background-color: #ffffff;
            border: #f8f8f8 1px solid;
        }
        &:disabled {
            pointer-events: none;
            color: #ffffff;
            background-color: #ededed;
        }
    `,
    black: css`
        color: #ffffff;
        background-color: #101010;
        &:active {
            color: #ffffff;
            background-color: #555555;
        }
        &:disabled {
            pointer-events: none;
            color: #ffffff;
            background-color: #ededed;
        }
    `,
};

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    soild?: "blue" | "black";
    outline?: "blue";
    size?: "tiny" | "xsmall" | "small" | "medium" | "large" | "xlarge";
    label?: string;
    color?: string;
    background?: string;
    sizeStyle?: FlattenSimpleInterpolation;
    soildStyle?: FlattenSimpleInterpolation;
    outlineStyle?: FlattenSimpleInterpolation;
    isDisabled?: boolean;
    isLoadiong?: boolean;
    isStatus?: boolean;
    isIcon?: boolean;
    onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
    font-weight: 500;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    &:active {
        color: #ffffff;
        background-color: #2c5bea;
    }
    &:disabled {
        pointer-events: none;
        color: #ffffff;
        background-color: #ededed;
    }

    color: ${(props) => props.color || "#ffffff"};
    background: ${(props) => props.background || "#0740e4"};

    border: ${(props) => props.color || "#ededed 1px solid"};

    ${(props) => props.sizeStyle}
    ${(props) => props.soildStyle}
    
    ${(props) =>
        props.isStatus &&
        css`
            pointer-events: none;
            color: #101010;
            background: #f8f8f8;
        `}  
        ${(props) =>
        props.isLoadiong &&
        css`
            pointer-events: none;
        `}
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
    size = "medium",
    soild = "blue",
    outline = "blue",
    label,
    isDisabled = false,
    isLoadiong = false,
    isStatus = false,
    isIcon = false,
    ...props
}: ButtonProps) => {
    const sizeStyle = SIZES[size];
    const soildStyle = SOILD[soild];
    const outlineStyle = OUTLINE[outline];
    return (
        <StyledButton
            type={type}
            sizeStyle={sizeStyle}
            disabled={isDisabled}
            isStatus={isStatus}
            isLoadiong={isLoadiong}
            soildStyle={soildStyle}
            outlineStyle={outlineStyle}
            {...props}
        >
            {isIcon ? <AiFillHome className="button--icon" /> : ""}
            {isLoadiong ? <Loader /> : label}
        </StyledButton>
    );
};

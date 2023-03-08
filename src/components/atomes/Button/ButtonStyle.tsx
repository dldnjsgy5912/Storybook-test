import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export const SIZES = {
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

export const Variants = {
    soildBlue: css`
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
    soildBlack: css`
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
    soildWhiteBlue: css`
        color: #0740e4;
        background-color: #ffffff;
        &:active {
            color: #4f75ef;
            background-color: #ededed;
        }
        &:disabled {
            pointer-events: none;
            color: #0740e4;
            background-color: #ededed;
        }
    `,
    soildWhiteBlack: css`
        color: #101010;
        background-color: #ffffff;
        &:active {
            color: #555555;
            background-color: #ededed;
        }
        &:disabled {
            pointer-events: none;
            color: #101010;
            background-color: #ededed;
        }
    `,
    outlineBlue: css`
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
    outlinewhite: css`
        color: #707070;
        background-color: #ffffff;
        border: #ededed 1px solid;
        &:active {
            color: #7590f4;
            background-color: #fafbff;
            border: #f5f8ff 1px solid;
        }
        &:disabled {
            pointer-events: none;
            color: #ffffff;
            background-color: #ededed;
        }
    `,
};

// Loader
export const Loader = styled.span`
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

// StyledButton
interface ButtonStyleProps {
    sizeStyle?: FlattenSimpleInterpolation;
    variantsStyle?: FlattenSimpleInterpolation;
    isLoadiong?: boolean;
    isStatus?: boolean;
    variant?: string;
}

export const StyledButton = styled.button<ButtonStyleProps>`
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

import styled, { css, FlattenSimpleInterpolation } from "styled-components";

// Loader
export const Loader = styled.span`
    width: 1.6rem;
    height: 1.6rem;
    border: 0.2rem solid #d9d9d9;
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
    variantsStyle?: FlattenSimpleInterpolation;
    isLoadiong?: boolean;
    isStatus?: boolean;
    variant: string;
    size: string;
}

export const StyledButton = styled.button<ButtonStyleProps>`
    font-weight: 500;
    border: 0;
    border-radius: 0.5rem;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

    ${({ theme, size }) => theme.ButtonSizes[size]}

    ${({ theme, variant }) => theme.ButtonVariants[variant]}

    ${({ isLoadiong }) =>
        isLoadiong &&
        css`
            pointer-events: none;
        `}

    ${({ isStatus, variant }) =>
        isStatus && (variant === "soildBlue" || "soildBlack" || "soildWhiteBlue" || "soildWhiteBlack")
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
                  border: 0.1rem solid #ededed;
              `
            : null}
`;

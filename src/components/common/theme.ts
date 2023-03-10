import { css } from "styled-components";

const Sizes = {
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

const Variants = {
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

const Color = {
    primaryColor: {},
};
const theme = { Sizes, Variants };

export default theme;

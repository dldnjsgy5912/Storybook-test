import { css } from "styled-components";

const Font = {
    heading: {
        depth1: css`
            font-size: 32px;
            line-height: 48px;
        `,
        depth2: css`
            font-size: 28px;
            line-height: 42px;
        `,
    },
    title: css`
        font-size: 24px;
        line-height: 36px;
    `,
    subTitle: {
        depth1: css`
            font-size: 20px;
            line-height: 30px;
        `,
        depth2: css`
            font-size: 18px;
            line-height: 26px;
        `,
    },
    body: {
        depth1: css`
            font-size: 16px;
            line-height: 24px;
        `,
        depth2: css`
            font-size: 14px;
            line-height: 22px;
        `,
    },
    caption: {
        depth1: css`
            font-size: 12px;
            line-height: 18px;
        `,
        depth2: css`
            font-size: 10px;
            line-height: 16px;
        `,
    },
};

const ButtonSizes = {
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

const Color = {
    primaryColor: {
        primary100: css`
            color: #0740e4;
        `,
        primary90: css`
            color: #2c5bea;
        `,
        primary80: css`
            color: #4f75ef;
        `,
        primary70: css`
            color: #7590f4;
        `,
        primary60: css`
            color: #9ab0f6;
        `,
        primary50: css`
            color: #b4c3f8;
        `,
        primary40: css`
            color: #cdd7fa;
        `,
        primary30: css`
            color: #e5ebfc;
        `,
        primary20: css`
            color: #f5f8ff;
        `,
        primary10: css`
            color: #fafbff;
        `,
    },
    secondaryColor: {
        secondary100: css`
            color: #ff673e;
        `,
        secondary90: css`
            color: #ff7b57;
        `,
        secondary80: css`
            color: #ff9173;
        `,
        secondary70: css`
            color: #ffa188;
        `,
        secondary60: css`
            color: #ffa993;
        `,
        secondary50: css`
            color: #ffbcaa;
        `,
        secondary40: css`
            color: #ffcdc1;
        `,
        secondary30: css`
            color: #ffe3dd;
        `,
        secondary20: css`
            color: #fff3f0;
        `,
        secondary10: css`
            color: #fefbfb;
        `,
    },
    greenColor: {
        green100: css`
            color: #83b100;
        `,
        green90: css`
            color: #9ec236;
        `,
        green80: css`
            color: #aaca4e;
        `,
        green70: css`
            color: #b8d36c;
        `,
        green60: css`
            color: #c3da82;
        `,
        green50: css`
            color: #cee099;
        `,
        green40: css`
            color: #d9e8b1;
        `,
        green30: css`
            color: #e4efc8;
        `,
        green20: css`
            color: #f4f9e9;
        `,
        green10: css`
            color: #fbfdf7;
        `,
    },
    grayColor: {
        gray100: css`
            color: #101010;
        `,
        gray90: css`
            color: #3c3c3c;
        `,
        gray80: css`
            color: #555555;
        `,
        gray70: css`
            color: #707070;
        `,
        gray60: css`
            color: #939393;
        `,
        gray50: css`
            color: #a7a7a7;
        `,
        gray40: css`
            color: #c2c2c2;
        `,
        gray30: css`
            color: #d9d9d9;
        `,
        gray20: css`
            color: #ededed;
        `,
        gray10: css`
            color: #f8f8f8;
        `,
    },
};

const ButtonVariants = {
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

const theme = { ButtonSizes, ButtonVariants, Color, Font };

export default theme;

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@/components/Button/Button";

export default {
    title: "Example/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SoildBlue = Template.bind({});
SoildBlue.args = {
    mode: "soild-blue",
    label: "버튼",
    size: "medium",
};

export const SoildBlack = Template.bind({});
SoildBlack.args = {
    mode: "soild-black",
    label: "버튼",
    size: "medium",
};
export const SoildWhiteBlue = Template.bind({});
SoildWhiteBlue.args = {
    mode: "soild-white-blue",
    label: "버튼",
    size: "medium",
};
export const SoildWhiteBlack = Template.bind({});
SoildWhiteBlack.args = {
    mode: "soild-white-black",
    label: "버튼",
    size: "medium",
};
export const OutlineBlue = Template.bind({});
OutlineBlue.args = {
    mode: "outline-blue",
    label: "버튼",
    size: "medium",
};
export const OutlineWhite = Template.bind({});
OutlineWhite.args = {
    mode: "outline-white",
    label: "버튼",
    size: "medium",
};
export const WithDisabled = Template.bind({});
WithDisabled.args = {
    label: "버튼",
    size: "medium",
    isDisabled: true,
};
export const WithLoadiong = Template.bind({});
WithLoadiong.args = {
    label: "버튼",
    size: "medium",
    isLoadiong: true,
};
export const WithStatus = Template.bind({});
WithStatus.args = {
    label: "버튼",
    size: "medium",
    isStatus: true,
};
export const WithIcon = Template.bind({});
WithIcon.args = {
    label: "버튼",
    size: "medium",
    isIcon: true,
};
/* 버튼 사이즈 */
// export const Tiny = Template.bind({});
// Tiny.args = {
//     size: "tiny",
//     label: "버튼",
// };

// export const XSmall = Template.bind({});
// XSmall.args = {
//     size: "xsmall",
//     label: "버튼",
// };

// export const Small = Template.bind({});
// Small.args = {
//     size: "small",
//     label: "버튼",
// };

// export const Medium = Template.bind({});
// Medium.args = {
//     size: "medium",
//     label: "버튼",
// };

// export const Large = Template.bind({});
// Large.args = {
//     size: "large",
//     label: "버튼",
// };

// export const XLarge = Template.bind({});
// XLarge.args = {
//     size: "xlarge",
//     label: "버튼",
// };

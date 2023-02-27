import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
    title: "Example/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const A1 = Template.bind({});
A1.args = {
    mode: "A1",
    label: "버튼",
    size: "medium",
};

export const A2 = Template.bind({});
A2.args = {
    mode: "A2",
    label: "버튼",
    size: "medium",
};
export const B1 = Template.bind({});
B1.args = {
    mode: "B1",
    label: "버튼",
    size: "medium",
};
export const B2 = Template.bind({});
B2.args = {
    mode: "B2",
    label: "버튼",
    size: "medium",
};
export const C1 = Template.bind({});
C1.args = {
    mode: "C1",
    label: "버튼",
    size: "medium",
};
export const C2 = Template.bind({});
C2.args = {
    mode: "C2",
    label: "버튼",
    size: "medium",
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

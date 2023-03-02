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

export const Soild = Template.bind({});
Soild.args = {
    label: "버튼",
    size: "medium",
    soild: "blue",
};

export const Outline = Template.bind({});
Outline.args = {
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

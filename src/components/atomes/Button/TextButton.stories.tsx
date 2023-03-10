import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextButton } from "@/components/atomes/Button/TextButton";

export default {
    title: "DESIGN STSTEM/Button/B. Text Button",
    component: TextButton,
    argTypes: {},
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/CIsiGfhWDvuu9FikpT62Rk/components_1.0?node-id=5%3A2&t=tVrx5haDUiHQu1ms-1",
        },
    },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => (
    <TextButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    label: "텍스트 버튼",
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
    label: "텍스트 버튼",
    isDisabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: "텍스트 버튼",
    isIcon: true,
};

export const WithUnderline = Template.bind({});
WithUnderline.args = {
    label: "텍스트 버튼",
    underline: true,
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@/components/atomes/Button/Button";
import { expect } from "@storybook/jest";
import { waitFor, userEvent, within } from "@storybook/testing-library";

export default {
    title: "DESIGN STSTEM/Button/A. Container Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Soild = Template.bind({});
Soild.args = {
    label: "버튼",
    variant: "soildBlue",
};

// testing
Soild.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "버튼" });
    userEvent.click(button);
};

export const Outline = Template.bind({});
Outline.args = {
    label: "버튼",
    variant: "outlineBlue",
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
    label: "버튼",
    isDisabled: true,
};
export const WithLoading = Template.bind({});
WithLoading.args = {
    label: "버튼",
    isLoadiong: true,
};
export const WithStatus = Template.bind({});
WithStatus.args = {
    label: "버튼",
    isStatus: true,
};
export const WithIcon = Template.bind({});
WithIcon.args = {
    label: "버튼",
    isIcon: true,
};

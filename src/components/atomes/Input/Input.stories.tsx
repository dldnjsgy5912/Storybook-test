import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "@/components/atomes/Input/Input";

export default {
    title: "DESIGN STSTEM/Input/A. Inputs",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
    label: "라벨",
    placeholder: "8~20자 이내 영문, 숫자, 특수문자 조합",
    type: "text",
};
export const Error = Template.bind({});
Error.args = {
    label: "라벨",
    placeholder: "8~20자 이내 영문, 숫자, 특수문자 조합",
    type: "text",
    errorMessage: "아이디 또는 비밀번호를 잘못 입력하셨습니다. ",
};

export const WithRequired = Template.bind({});
WithRequired.args = {
    label: "라벨",
    placeholder: "8~20자 이내 영문, 숫자, 특수문자 조합",
    type: "text",
    isRequired: true,
};

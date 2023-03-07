import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextButton } from '@/components/atomes/Button/TextButton';

export default {
  title: 'DESIGN STSTEM/Button/B. Text Button',
  component: TextButton,
  argTypes: {},
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '텍스트 버튼',
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  label: '텍스트 버튼',
  isDisabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: '텍스트 버튼',
  isIcon: true,
};

export const WithUnderline = Template.bind({});
WithUnderline.args = {
  label: '텍스트 버튼',
  underline: true,
};

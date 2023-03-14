import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Form } from '@/components/organisms/Form';

export default {
  title: 'DESIGN STSTEM/Form/B. Text Button',
  component: Form,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/CIsiGfhWDvuu9FikpT62Rk/components_1.0?node-id=5%3A2&t=tVrx5haDUiHQu1ms-1',
    },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form />;

export const Default = Template.bind({});
Default.args = {};

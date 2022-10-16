import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps, ButtonGroupProps, ButtonGroup } from '.';

const meta: Meta = {
  title: 'General/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['default', 'primary', 'secondary'],
      control: { type: 'select' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    hover: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    shadow: {
      control: { type: 'boolean' },
    },
    loadingCentered: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Button'
    },
    icon: {
      control: { type: 'object' },
    },
  }
};

const Template: Story<ButtonProps> = (args) => <Button {...args}/>;

const GroupTemplate: Story<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  type: "default",
  disabled: false,
  loading: false,
  shadow: false
};

export const GroupButton = GroupTemplate.bind({});
GroupButton.args = {
  hover: false
};



export default meta;
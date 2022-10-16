import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Badge, BadgeProps } from '.';

const meta: Meta = {
  title: 'Displays/Badge',
  component: Badge,
  argTypes: {
    children: {
      defaultValue: 'Badge'
    }
  }
};

const Template: Story<BadgeProps> = (args) => <Badge {...args}/>;

export const Default = Template.bind({});
Default.args = {
  color: "green",
  size: "sm",
  dot: false
};

export default meta;
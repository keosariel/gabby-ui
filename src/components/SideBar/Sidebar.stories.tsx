import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Sidebar, SidebarProps } from '.';
import { Typography } from '../Typography';

const meta: Meta = {
  title: 'Templates/Sidebar',
  component: Sidebar
};


const Template: Story<SidebarProps> = (args) => {
  return (
    <Sidebar {...args}>
      <Typography.Text size="md">Card content</Typography.Text>
      <br/>
      <Typography.Text size="md">Card content</Typography.Text>
      <br/>
      <Typography.Text size="md">Card content</Typography.Text>
    </Sidebar>
  );
};

export const Default = Template.bind({});
Default.args = {
  
};

export default meta;
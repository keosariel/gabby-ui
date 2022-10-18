import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Sidebar, SidebarProps } from '.';
import { Typography } from '../Typography';

const meta: Meta = {
  title: 'Templates/Sidebar',
  component: Sidebar,
  argTypes: {
    children: {
      control: { type: 'object' },
    },
    className: {
      control: { type: 'text' },
    },
    style: {
      control: { type: 'object' },
    },
    content: {
      control: { type: 'object' },
    }
  }
};


const Template: Story<SidebarProps> = (args) => {
  return (
    <Sidebar {...args}>
      <div className='w-full bg-white h-full'>
        <Typography.Text className='px-4 pt-3 mb-3 block' size="md">Title 1</Typography.Text>
        <hr/>
        <Typography.Text className='px-4 my-3 block' size="md">Title 2</Typography.Text>
        <hr/>
        <Typography.Text className='px-4 my-3 block' size="md">Title 3</Typography.Text>
        <hr/>
        <Typography.Text className='px-4 my-3 block' size="md">Title 5</Typography.Text>
        <hr/>
        <Typography.Text className='px-4 my-3 block' size="md">Title 6</Typography.Text>
        <hr/>
        <Typography.Text className='px-4 my-3 block' size="md">Title 7</Typography.Text>
        <hr/>
        <Typography.Text className='px-4 my-3 block' size="md">Title 8</Typography.Text>
        <hr/>
        <Typography.Text className='px-4 my-3 block' size="md">Title 9</Typography.Text>
        <hr/>
        <Typography.Text className='px-4 my-3 block' size="md">Title 10</Typography.Text>
        <hr/>
        <Typography.Text className='px-4 my-3 block' size="md">Title 11</Typography.Text>
        
      </div>
    </Sidebar>
  );
};

export const Default = Template.bind({});
Default.args = {
  
};

export default meta;
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Arena, ArenaProps } from '.';
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';
import { Card } from '../Card';
import { Typography } from '../Typography';

const meta: Meta = {
  title: 'Templates/Arena',
  component: Arena,
  argTypes: {
    children: {
      control: { type: 'object' },
    },
    navBar: {
      control: { type: 'object' },
    },
    sideBar: {
      control: { type: 'object' },
    },
    style: {
      control: { type: 'object' },
    },
    className: {
      control: { type: 'text' },
    },
  }
};


const Template: Story<ArenaProps> = (args) => {
  return (
    <Arena {...args}>
        <Card title={"Title"} hoverable>
            <Typography.Text size="md">Arena content</Typography.Text>
            <br/>
            <Typography.Text size="md">Arena content</Typography.Text>
            <br/>
            <Typography.Text size="md">Arena content</Typography.Text>
        </Card>
    </Arena>
  );
};

export const Default = Template.bind({});
Default.args = {
  navBar: (
    <Navbar links={[
      { text: 'Dashboard', href: '/' }
    ]} logo={(
            <svg width="50" height="50" viewBox="0 0 525 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="208" cy="255" r="200" fill="black"/>
                <circle cx="324.997" cy="255" r="200" fill="#66DA5B"/>
            </svg>
        )}
      />
  ),
  sideBar: <Sidebar content={
    <>
    <Card title={"Title"} hoverable>
        <Typography.Text size="md">Arena content</Typography.Text>
        <br/>
        <Typography.Text size="md">Arena content</Typography.Text>
        <br/>
        <Typography.Text size="md">Arena content</Typography.Text>
    </Card>
    </>
  }>
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
};

export default meta;
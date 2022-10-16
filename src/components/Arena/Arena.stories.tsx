import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Arena, ArenaProps } from '.';
import { Navbar } from '../Navbar';
import { Sidebar } from '../SideBar';
import { Card } from '../Card';
import { Typography } from '../Typography';

const meta: Meta = {
  title: 'Templates/Arena',
  component: Arena
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
      { text: 'Dashboard', href: '/' },
      // { text: 'About', href: '/about' },
      // { text: 'Contact', href: '/contact' },
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
        <Typography.Text size="md">Arena content</Typography.Text>
        <br/>
        <hr/>
        <Typography.Text size="md">Arena content</Typography.Text>
        <br/>
        <hr/>
        <Typography.Text size="md">Arena content</Typography.Text>
  </Sidebar>
};

export default meta;
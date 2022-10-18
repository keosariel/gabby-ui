import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Navbar, NavbarProps } from '.';

const meta: Meta = {
  title: 'Templates/Navbar',
  component: Navbar,
  argTypes: {
        links: {
            control: { type: 'object' },
        },
        logo: {
            control: { type: 'object' },
        },
        className: {
            control: { type: 'text' },
        },
        style: {
            control: { type: 'object' },
        }
    }
};

const Template: Story<NavbarProps> = (args) => (
        <Navbar {...args} />
);

export const Default = Template.bind({});
Default.args = {
    logo: (
        <svg width="50" height="50" viewBox="0 0 525 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="208" cy="255" r="200" fill="black"/>
            <circle cx="324.997" cy="255" r="200" fill="#66DA5B"/>
        </svg>
    ),
    links: [
        {
            href: 'https://www.google.com',
            text: 'Home',
            side: 'left'
        },
        {
            href: 'https://www.google.com',
            text: 'Search',
            side: 'left'
        },
        {
            href: 'https://www.google.com',
            text: 'About',
            side: 'right'
        }
    ]
};

export default meta;
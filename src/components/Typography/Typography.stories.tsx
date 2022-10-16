import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Typography } from '.';
import { TextProps } from './Text';
import { LinkProps } from './Link';

const meta: Meta = {
  title: 'General/Typography',
  component: Typography,
  argTypes: {
    children: {
      defaultValue: 'Hello world'
    }
  }
};

const { Text, Link } = Typography

const TextTemplate: Story<TextProps> = (args) => (
    <>
      <Text size='3xl' {...args}>Hello, World (3xl) </Text>
      <br/>
      <Text size='2xl' {...args}>Hello, World (2xl)</Text>
      <br/>
      <Text size='xl' {...args}>Hello, World (xl)</Text>
      <br/>
      <Text size='lg' {...args}>Hello, World (lg)</Text>
      <br/>
      <Text size='md' {...args}>Hello, World (md)</Text>
      <br/>
      <Text size='sm' {...args}>Hello, World (sm)</Text>
      <br/>
      <Text size='xs' {...args} disabled >Hello, World (disabled)</Text>
      <br/>
      <Text size='md' {...args} mark>Hello, World (mark)</Text>
      <br/>
      <Text size='md' {...args} keyboard>Hello, World (keyboard)</Text>
      <br/>
      <Text size='md' {...args} underline>Hello, World (underline)</Text>
      <br/>
      <Text size='md' {...args} strikethrough>Hello, World (strikethrough)</Text>
      <br/>
      <Text size='md' {...args} strong>Hello, World (strong)</Text>
      <br/>
      <Text size='md' {...args} small>Hello, World (small)</Text>
      <br/>
    </>
);

export const Texts = TextTemplate.bind({});
Texts.args = {
    children: 'Hello world',
    type: 'default',
    disabled: false,
    mark: false,
    code: false,
    keyboard: false,
    underline: false,
    strikethrough: false,
    strong: false,
    small: false
};

const LinkTemplate: Story<LinkProps> = (args) => <Link {...args}/>;

export const Links = LinkTemplate.bind({});
Links.args = {
    target: '_blank',
    href: 'https://spotlyt.cloud/'    
};

export default meta;
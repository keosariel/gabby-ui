import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from '.';
import { Typography } from '../Typography';

const meta: Meta = {
  title: 'Displays/Card',
  component: Card
};


const Template: Story<CardProps> = (args) => {
  return (
    <Card {...args}>
      <Typography.Text size="md">Card content</Typography.Text>
      <br/>
      <Typography.Text size="md">Card content</Typography.Text>
      <br/>
      <Typography.Text size="md">Card content</Typography.Text>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {
    title: "Card Title",
    titleExtra: "Extra",
    description: "This is a description",
    hoverable: false
};

export const CardHover = Template.bind({});
CardHover.args = {
    title: "Card Title",
    titleExtra: "Extra",
    description: "This is a description",
    hoverable: true
};

const TemplateWithImage: Story<CardProps> = (args) => <Card {...args}/>;

export const CardImage = TemplateWithImage.bind({});
CardImage.args = {
    title: "Card Title",
    titleExtra: "Extra",
    cover: <img src="https://source.unsplash.com/random/300x200" alt="cover"/>,
    description: "This is a description",
    hoverable: true
};

export default meta;
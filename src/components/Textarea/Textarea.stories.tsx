import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Textarea, TextAreaProps } from '.';

const meta: Meta = {
  title: 'Data Input/Textarea',
  component: Textarea
};

const Template: Story<TextAreaProps> = (args) => (
    <>
        <Textarea size="xs" placeholder='Extra Small Textarea' {...args}/>
        <br/>
        <Textarea size="sm" placeholder='Small Textarea' {...args}/>
        <br/>
        <Textarea size="md" placeholder='Medium Textarea' {...args}/>
        <br/>
        <Textarea size="lg" placeholder='Large Textarea' {...args}/>
        <br/>
        <Textarea size="xl" placeholder='Extra Large Textarea' {...args}/>
    </>
);

export const Default = Template.bind({});
Default.args = {
    label: '',
    descriptionText: '',
    error: '',
    disabled: false,
    borderless: false,
    type: 'text'
};

export const TextareaLabels = Template.bind({});
TextareaLabels.args = {
    label: 'Username Label',
    descriptionText: '',
    error: '',
    disabled: false,
    borderless: false,
    type: 'text'
};

export const TextareaDescription = Template.bind({});
TextareaDescription.args = {
    label: '',
    descriptionText: 'This is a description',
    error: '',
    disabled: false,
    borderless: false,
    type: 'text'
};

export const TextareaError = Template.bind({});
TextareaError.args = {
    label: '',
    descriptionText: '',
    error: 'This is a error description',
    disabled: false,
    borderless: false,
    type: 'text'
};

export default meta;
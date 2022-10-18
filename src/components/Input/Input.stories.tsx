import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, InputProps } from '.';

const meta: Meta = {
  title: 'Data Input/Input',
  component: Input,
  argTypes: {
        type: {
            options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url'],
            control: { type: 'select' },
        },
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control: { type: 'select' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        error: {
            control: { type: 'text' },
        },
        className: {
            control: { type: 'text' },
        },
        inputRef: {
            control: { type: 'object' },
        },
        onChange: { action: 'changed' },
        borderless: {
            control: { type: 'boolean' },
        },
        label: {
            control: { type: 'text' },
        },
        placeholder: {
            control: { type: 'text' },
        },
        name: {
            control: { type: 'text' },
        }
    }
};

const Template: Story<InputProps> = (args) => (
    <>
        <Input size="xs" placeholder='Extra Small Input' {...args}/>
        <br/>
        <Input size="sm" placeholder='Small Input' {...args}/>
        <br/>
        <Input size="md" placeholder='Medium Input' {...args}/>
        <br/>
        <Input size="lg" placeholder='Large Input' {...args}/>
        <br/>
        <Input size="xl" placeholder='Extra Large Input' {...args}/>
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

export const InputLabels = Template.bind({});
InputLabels.args = {
    label: 'Username Label',
    descriptionText: '',
    error: '',
    disabled: false,
    borderless: false,
    type: 'text'
};

export const InputDescription = Template.bind({});
InputDescription.args = {
    label: '',
    descriptionText: 'This is a description',
    error: '',
    disabled: false,
    borderless: false,
    type: 'text'
};

export const InputError = Template.bind({});
InputError.args = {
    label: '',
    descriptionText: '',
    error: 'This is a error description',
    disabled: false,
    borderless: false,
    type: 'text'
};

export default meta;
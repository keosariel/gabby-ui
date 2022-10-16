import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectProps, Option } from '.';

const meta: Meta = {
  title: 'Data Input/Select',
  component: Select
};

const Template: Story<SelectProps> = (args) => (
    <>
        <Select size="xs" {...args}>
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
        </Select>
        <br/>
        <Select size="sm" {...args}>
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
        </Select>
        <br/>
        <Select size="md" {...args}>
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
        </Select>
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

export const SelectDescription = Template.bind({});
SelectDescription.args = {
    label: '',
    descriptionText: 'This is a description',
    error: '',  
    disabled: false,
    borderless: false,
    type: 'text'
};

export const SelectError = Template.bind({});
SelectError.args = {
    label: '',
    descriptionText: '',
    error: 'This is an error',  
    disabled: false,
    borderless: false,
    type: 'text'
};


export default meta;
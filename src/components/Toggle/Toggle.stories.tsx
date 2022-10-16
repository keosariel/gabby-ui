import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Toggle, ToggleProps } from '.';

const meta: Meta = {
  title: 'Data Input/Toggle',
  component: Toggle,
  argTypes: {
    onChange: { action: 'changed' },
  }
};

const Template: Story<ToggleProps> = (args) => (
    <>
        <Toggle size="xs" {...args} />
        <br/>
        <Toggle size="sm" {...args} />
        <br/>
        <Toggle size="md" {...args} />
        <br/>
        <Toggle size="lg" {...args} />
        <br/>
        <Toggle size="xl" {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {
    label: 'Toggle',
    descriptionText: 'Toggle description',
    error: 'Toggle error',
    disabled: false,
    defaultChecked: false
};

export default meta;
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Popover, PopoverProps } from '.';
import { Input } from '../Input';
import { Button } from '../Button';
import { Typography } from '../Typography';

const meta: Meta = {
  title: 'Navigations/Popover',
  component: Popover,
  argTypes: {
    align: {
      options: ['center', 'start', 'end'],
      control: { type: 'select' },
    },
    ariaLabel: {
      control: { type: 'text' },
    },
    arrow: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'object' },
    },
    className: {
      control: { type: 'text' },
    },
    defaultOpen: {
      control: { type: 'boolean' },
    },
    modal: {
      control: { type: 'boolean' },
    },
    open: {
      control: { type: 'boolean' },
    },
    overlay: {
      control: { type: 'object' },
    },
    portalled: {
      control: { type: 'boolean' },
    },
    showClose: {
      control: { type: 'boolean' },
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
    },
    sideOffset: {
      control: { type: 'number' },
    },
    style: {
      control: { type: 'object' },
    }
  }
};

const Template: Story<PopoverProps> = (args) => (
<div className="flex justify-center">
    <Popover
      {...args}
      side="bottom"
      align="center"
      className="w-96"
      overlay={[
        <>
            <div className="p-3 px-4">
                <Typography.Text className="mt-0" size="md">
                Title is here
                </Typography.Text>
                <Input
                size="sm"
                label="Width"
                defaultValue="100%"
                descriptionText="Set the width of something"
                />
                <Input
                size="sm"
                label="Width"
                defaultValue="100%"
                descriptionText="Set the width of something"
                />
                <Input
                size="sm"
                label="Width"
                defaultValue="100%"
                descriptionText="Set the width of something"
                />
            </div>
            </>,
        ]}
        >
      <Button>
        Click for Popover
      </Button>
    </Popover>
  </div>
);

export const Default = Template.bind({});
Default.args = {
    arrow: true
};

export default meta;
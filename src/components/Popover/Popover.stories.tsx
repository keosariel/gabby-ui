import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Popover, PopoverProps } from '.';
import { Input } from '../Input';
import { Button } from '../Button';
import { Typography } from '../Typography';

const meta: Meta = {
  title: 'Navigations/Popover',
  component: Popover
};

const Template: Story<PopoverProps> = (args) => (
<div className="flex justify-center">
    <Popover
      {...args}
      side="bottom"
      align="center"
      portalled
      showClose
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
    
};

export default meta;
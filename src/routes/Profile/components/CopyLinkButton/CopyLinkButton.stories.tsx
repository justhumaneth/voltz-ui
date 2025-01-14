import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CopyLinkButton } from './CopyLinkButton';

export default {
  title: 'Interface/CopyLinkButton',
  component: CopyLinkButton,
  args: {},
} as ComponentMeta<typeof CopyLinkButton>;

const Template: ComponentStory<typeof CopyLinkButton> = (args) => (
  <div
    style={{
      display: 'flex',
      width: 'calc(100% - 200px)',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
    }}
  >
    <CopyLinkButton {...args} />
  </div>
);

export const Default = Template.bind({});
const args: React.ComponentProps<typeof CopyLinkButton> = {
  mode: 'copy',
};
Default.args = args;

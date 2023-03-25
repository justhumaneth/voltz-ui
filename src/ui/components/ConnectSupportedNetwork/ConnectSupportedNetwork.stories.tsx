import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ConnectSupportedNetwork } from './ConnectSupportedNetwork';

export default {
  title: 'ui/components/ConnectSupportedNetwork',
  component: ConnectSupportedNetwork,
  args: {},
} as ComponentMeta<typeof ConnectSupportedNetwork>;

const Template: ComponentStory<typeof ConnectSupportedNetwork> = (args) => (
  <ConnectSupportedNetwork {...args} />
);

export const Default = Template.bind({});
Default.args = {
  connectSupportedNetworkText: 'CONNECT WITH A SUPPORTED NETWORK',
  heading: '⚠️ RESTRICTED',
  subheading: 'Your wallet needs to be connected to a supported network.',
};

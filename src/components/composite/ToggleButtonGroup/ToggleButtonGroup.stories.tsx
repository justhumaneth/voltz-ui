import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AgentProvider } from '../../../contexts/AgentContext/AgentProvider';
import { Agents } from '../../../contexts/AgentContext/types';
import { ToggleButtonGroup } from './ToggleButtonGroup';

export default {
  title: 'Composite/ToggleButtonGroup',
  component: ToggleButtonGroup,
  argTypes: {
    label: { control: 'text' },
    onChangeOption: { action: 'changed' },
    agent: {
      control: 'radio',
      options: [Agents.FIXED_TRADER, Agents.VARIABLE_TRADER, Agents.LIQUIDITY_PROVIDER],
    },
  },
} as ComponentMeta<typeof ToggleButtonGroup>;

const Template: ComponentStory<typeof ToggleButtonGroup> = (args) => (
  <AgentProvider>
    <ToggleButtonGroup {...args} />
  </AgentProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  options: ['FIXED', 'VARIABLE', 'SOMETHING ELSE'],
};

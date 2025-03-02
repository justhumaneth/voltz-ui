import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AgentProvider } from '../../../contexts/AgentContext/AgentProvider';
import { AMMTable } from './AMMTable';

export default {
  title: 'Interface/AMMTable',
  component: AMMTable,
  args: {
    data: [],
  },
} as ComponentMeta<typeof AMMTable>;

const Template: ComponentStory<typeof AMMTable> = (args) => (
  <AgentProvider>
    <AMMTable {...args} />
  </AgentProvider>
);

export const Basic = Template.bind({});
Basic.args = {};

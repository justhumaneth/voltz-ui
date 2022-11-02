import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BadgeCard } from './BadgeCard';
import React from 'react';

export default {
  title: 'Interface/BadgeCardV1',
  component: BadgeCard,
  args: {},
} as ComponentMeta<typeof BadgeCard>;

const Template: ComponentStory<typeof BadgeCard> = (args) => <BadgeCard {...args} />;

export const Default = Template.bind({});
const args: React.ComponentProps<typeof BadgeCard> = {
  variant: 'leverageCrowbar',
};
Default.args = args;
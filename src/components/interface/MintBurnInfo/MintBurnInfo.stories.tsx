import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AMM } from '@voltz-protocol/v1-sdk';
import React from 'react';

import { AgentProvider } from '../../../contexts/AgentContext/AgentProvider';
import { Agents } from '../../../contexts/AgentContext/types';
import { AMMProvider } from '../../../contexts/AMMContext/AMMContext';
import {
  MintBurnFormModes,
  MintBurnFormProvider,
  useMintBurnForm,
} from '../../../contexts/MintBurnFormContext/MintBurnFormContext';
import { MintBurnInfo } from './MintBurnInfo';

export default {
  title: 'Interface/MintBurnInfo',
  component: MintBurnInfo,
  argTypes: {
    onSubmit: { action: 'clicked' },
  },
} as ComponentMeta<typeof MintBurnInfo>;

const mockAmm = {
  getCapPercentage: () => Promise.resolve(),
  getFixedApr: () => Promise.resolve(),
  getInstantApy: () => Promise.resolve(),
  isUnderlyingTokenApprovedForPeriphery: () => true,
  hasEnoughUnderlyingTokens: () => true,
  underlyingToken: {
    id: '0x123456789',
    name: 'gil',
  },
} as unknown as AMM;

// Creating a new position
const NewPositionTemplate: ComponentStory<typeof MintBurnInfo> = (args) => (
  <AgentProvider defaultAgent={Agents.LIQUIDITY_PROVIDER}>
    <AMMProvider amm={mockAmm}>
      <MintBurnFormProvider mode={MintBurnFormModes.NEW_POSITION}>
        <NewPositionMintBurnForm {...args} />
      </MintBurnFormProvider>
    </AMMProvider>
  </AgentProvider>
);
const NewPositionMintBurnForm: React.FunctionComponent = (args) => {
  const balance = 100000;
  const mintMinimumMarginRequirement = 100;
  const form = useMintBurnForm();

  return (
    <MintBurnInfo
      {...args}
      balance={balance}
      formState={form.state}
      mintMinimumMarginRequirement={mintMinimumMarginRequirement}
      mintMinimumMarginRequirementLoading={false}
      mode={form.mode}
      underlyingTokenName={'GIL'}
    />
  );
};
export const NewPosition = NewPositionTemplate.bind({});
NewPosition.parameters = { controls: { exclude: /^on|is|formState*/ } };
NewPosition.args = {};

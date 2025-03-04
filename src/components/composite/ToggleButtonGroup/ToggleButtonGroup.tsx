import MuiToggleButtonGroup, {
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup';
import React, { useState } from 'react';

import { AgentProps } from '../../../contexts/AgentContext/types';
import { useAgentWithOverride } from '../../../hooks/useAgentWithOverride';
import { withLabel, WithLabelProps } from '../../hoc/withLabel/withLabel';
import { ToggleButton } from './ToggleButton/ToggleButton';

export type ToggleButtonGroupProps<T> = MuiToggleButtonGroupProps &
  AgentProps & {
    options: Array<T>;
    option?: T;
    defaultOption?: T;
    disabled?: boolean;
    onChangeOption: (option: T) => void;
  };

const ToggleButtonGroupComponent = <T,>({
  agent: agentOverride,
  options,
  option,
  defaultOption,
  disabled = false,
  onChangeOption,
}: ToggleButtonGroupProps<T>) => {
  useAgentWithOverride(agentOverride);
  const [activeOption, setOption] = useState(option || defaultOption || options[0]);
  const handleChange = (_event: React.MouseEvent<HTMLElement, MouseEvent>, value: T) => {
    setOption(value);
    onChangeOption(value);
  };

  return (
    <MuiToggleButtonGroup
      disabled={disabled}
      value={option || activeOption}
      exclusive
      onChange={handleChange}
    >
      {options.map((optionItem: T) => (
        <ToggleButton key={optionItem as unknown as string} value={optionItem}>
          {optionItem}
        </ToggleButton>
      ))}
    </MuiToggleButtonGroup>
  );
};

export const ToggleButtonGroup = <T,>(props: ToggleButtonGroupProps<T> & WithLabelProps) =>
  withLabel<ToggleButtonGroupProps<T>>(ToggleButtonGroupComponent)(props);

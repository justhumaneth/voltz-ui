import React from 'react';
import isUndefined from 'lodash/isUndefined';

import IconLabel from '../IconLabel/IconLabel';
import MaskedIntegerField from '../MaskedIntegerField/MaskedIntegerField';

export type MarginAmountProps = {
  protocol?: string;
  defaultMargin?: number;
  maxMargin?: number;
  margin?: number;
  onChangeMargin: (value: number) => void;
};

const MarginAmount: React.FunctionComponent<MarginAmountProps> = ({
  protocol,
  defaultMargin,
  margin,
  onChangeMargin,
}) => {
  const value = isUndefined(margin) ? defaultMargin : margin;
  const handleChange = (newValue: string) => {
    onChangeMargin(parseInt(newValue, 10));
  };

  return (
    <MaskedIntegerField
      affix={protocol || ''}
      label={<IconLabel label="margin amount" icon="information-circle" info="Something" />}
      value={value}
      onChange={handleChange}
      sx={{ width: '100%' }}
    />
  );
};

export default MarginAmount;

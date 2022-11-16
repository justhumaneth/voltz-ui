import { Box } from '@mui/system';
import LPMellowVaultDepositInfo from './components/LPMellowVaultDepositInfo';
import LPMellowVaultDepositWindow from './components/LPMellowVaultDepositWindow';
import MellowLpDepositFormHeader from './components/MellowLpDepositFormHeader';
import React from 'react';

import { MellowLpVault } from '@voltz-protocol/v1-sdk';

export type MellowLpDepositFormProps = {
  lpVault: MellowLpVault;
  onChangeDeposit: (value: number | undefined) => void;
  submitText: string;
  hintText: {
    text: string;
    suffixText?: string;
    textColor?: string;
  };
  onSubmit: () => void;
  disabled: boolean;
  onCancel: () => void;
};

const MellowLpDepositForm: React.FunctionComponent<MellowLpDepositFormProps> = ({
  lpVault,
  onChangeDeposit,
  submitText,
  hintText,
  disabled,
  onSubmit,
  onCancel,
}: MellowLpDepositFormProps) => {
  return (
    <>
      <MellowLpDepositFormHeader onCancel={onCancel} />
      <Box sx={{ display: 'flex' }}>
        <LPMellowVaultDepositInfo lpVault={lpVault} />
        <LPMellowVaultDepositWindow
          lpVault={lpVault}
          onChangeDeposit={onChangeDeposit}
          submitText={submitText}
          hintText={hintText}
          disabled={disabled}
          onSubmit={onSubmit}
        />
      </Box>
    </>
  );
};

export default MellowLpDepositForm;
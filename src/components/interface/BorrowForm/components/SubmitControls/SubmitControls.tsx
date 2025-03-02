import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

import { Agents } from '../../../../../contexts/AgentContext/types';
import {
  BorrowFormSubmitButtonHintStates,
  BorrowFormSubmitButtonStates,
} from '../../../../../contexts/BorrowFormContext/BorrowFormContext';
import { useTokenApproval } from '../../../../../hooks/useTokenApproval';
import { colors } from '../../../../../theme';
import { Button } from '../../../../atomic/Button/Button';
import { Ellipsis } from '../../../../atomic/Ellipsis/Ellipsis';

interface SubmitControlsProps {
  approvalsNeeded: boolean;
  isFormValid: boolean;
  isTradeVerified: boolean;
  onCancel: () => void;
  onSubmit: () => void;
  gaButtonId?: string;
  tokenApprovals: ReturnType<typeof useTokenApproval>;
  tradeInfoErrorMessage?: string;
  underlyingTokenName?: string;
  hintState: BorrowFormSubmitButtonHintStates;
  submitButtonState: BorrowFormSubmitButtonStates;
}

type TextProps = {
  bold?: boolean;
  children?: ReactNode;
  green?: boolean;
  red?: boolean;
};
const Text = ({ bold, children, green, red }: TextProps) => (
  <Box
    component="span"
    sx={{
      color: green ? colors.vzCustomGreen1.base : red ? colors.vzCustomRed1.base : undefined,
      fontWeight: bold ? 'bold' : undefined,
      textTransform: 'none',
    }}
  >
    {children}
  </Box>
);

export const SubmitControls = ({
  approvalsNeeded,
  isFormValid,
  isTradeVerified,
  onCancel,
  onSubmit,
  gaButtonId,
  tokenApprovals,
  hintState,
  tradeInfoErrorMessage,
  underlyingTokenName,
  submitButtonState,
}: SubmitControlsProps) => {
  const getHint = () => {
    switch (hintState) {
      case BorrowFormSubmitButtonHintStates.APPROVE_NEXT_TOKEN: {
        return (
          <>
            <Text bold green>
              {tokenApprovals.lastApproval?.text}
            </Text>
            <Text green> approved!</Text> Let's now approve{' '}
            <Text bold>{tokenApprovals.getNextApproval()?.text}</Text>
          </>
        );
      }
      case BorrowFormSubmitButtonHintStates.APPROVE_TOKEN: {
        return `Please approve ${tokenApprovals.getNextApproval()?.text || ''}`;
      }
      case BorrowFormSubmitButtonHintStates.APPROVING: {
        return 'Waiting for confirmation';
      }
      case BorrowFormSubmitButtonHintStates.CHECKING: {
        return 'Loading trade information';
      }
      case BorrowFormSubmitButtonHintStates.ERROR_TOKEN_APPROVAL: {
        return <Text red>{tokenApprovals.lastError?.message}</Text>;
      }
      case BorrowFormSubmitButtonHintStates.FORM_INVALID: {
        return 'Please fix form errors to continue';
      }
      case BorrowFormSubmitButtonHintStates.FORM_INVALID_BALANCE: {
        return <Text red>You do not have enough {underlyingTokenName}</Text>;
      }
      case BorrowFormSubmitButtonHintStates.FORM_INVALID_INCOMPLETE: {
        return 'Input your margin';
      }
      case BorrowFormSubmitButtonHintStates.FORM_INVALID_TRADE: {
        return <Text red>{tradeInfoErrorMessage}</Text>;
      }
      case BorrowFormSubmitButtonHintStates.INITIALISING: {
        return 'Initialising, please wait';
      }
      case BorrowFormSubmitButtonHintStates.READY_TO_TRADE: {
        return "Let's trade!";
      }
      case BorrowFormSubmitButtonHintStates.READY_TO_TRADE_TOKENS_APPROVED: {
        return (
          <>
            <Text green>Tokens approved</Text>. Let's trade!
          </>
        );
      }
    }
  };

  const getSubmitText = () => {
    switch (submitButtonState) {
      case BorrowFormSubmitButtonStates.APPROVE_UT_PERIPHERY: {
        return (
          <Box>
            Approve <Text>{underlyingTokenName === 'ETH' ? 'WETH' : underlyingTokenName}</Text>
          </Box>
        );
      }
      case BorrowFormSubmitButtonStates.APPROVING: {
        return (
          <>
            Approving
            <Ellipsis />
          </>
        );
      }
      case BorrowFormSubmitButtonStates.CHECKING: {
        return (
          <>
            Loading
            <Ellipsis />
          </>
        );
      }
      case BorrowFormSubmitButtonStates.INITIALISING: {
        return (
          <>
            Initialising
            <Ellipsis />
          </>
        );
      }
      case BorrowFormSubmitButtonStates.FIX_RATE: {
        return 'Fix Rate';
      }
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Button
          agent={Agents.FIXED_TRADER}
          disabled={
            !isFormValid ||
            tokenApprovals.checkingApprovals ||
            tokenApprovals.approving ||
            (!approvalsNeeded && isFormValid && !isTradeVerified)
          }
          id={gaButtonId}
          size="large"
          sx={{ flexGrow: 1 }}
          onClick={onSubmit}
        >
          {getSubmitText()}
        </Button>

        <Button
          agent={Agents.LIQUIDITY_PROVIDER}
          id={gaButtonId}
          sx={{ marginLeft: (theme) => theme.spacing(9.5), flexGrow: 0 }}
          onClick={onCancel}
        >
          Back
        </Button>
      </Box>

      <Typography
        sx={{
          marginTop: (theme) => theme.spacing(2),
          color: colors.lavenderWeb.darken015,
          fontSize: '12px',
        }}
        variant="body2"
      >
        {getHint()}
      </Typography>
    </>
  );
};

import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { AugmentedAMM } from '@utilities';
import { useWallet, useSelector, usePositions } from '@hooks';
import { selectors } from '@store';
import { Button, Panel, Typography } from '@components/atomic';
import { ProtocolInformation, WalletAddressDisplay } from '@components/composite';

export type PendingTransactionProps = {
  amm: AugmentedAMM;
  transactionId?: string;
  onComplete: () => void;
};

const PendingTransaction: React.FunctionComponent<PendingTransactionProps> = ({
  amm,
  transactionId,
  onComplete,
}) => {
  usePositions();
  const { account } = useWallet();
  const activeTransaction = useSelector(selectors.transactionSelector)(transactionId);

  if (!activeTransaction) {
    return null;
  }

  console.debug({ activeTransaction });

  const renderStatus = () => {
    if (!activeTransaction.failedAt && !activeTransaction.succeededAt) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            sx={{
              paddingTop: (theme) => theme.spacing(6),
              paddingBottom: (theme) => theme.spacing(8),
            }}
          >
            <Typography variant="h4">Loading...</Typography>
          </Box>
          <Box
            sx={{
              paddingBottom: (theme) => theme.spacing(2),
            }}
          >
            <Typography variant="subtitle1">WAITING FOR CONFIRMATION</Typography>
          </Box>
          <Box
            sx={{
              paddingBottom: (theme) => theme.spacing(2),
            }}
          >
            <WalletAddressDisplay address={account} />
          </Box>
          <Box
            sx={{
              paddingBottom: (theme) => theme.spacing(10),
            }}
          >
            <Typography variant="caption" color="secondary">
              Confirm this transaction in your wallet
            </Typography>
          </Box>
        </Box>
      );
    }

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          sx={{
            paddingTop: (theme) => theme.spacing(6),
            paddingBottom: (theme) => theme.spacing(8),
          }}
        >
          <Typography variant="h4">Done</Typography>
        </Box>
        <Box
          sx={{
            paddingBottom: (theme) => theme.spacing(2),
          }}
        >
          <Typography variant="subtitle1">TRANSACTION CONFIRMED</Typography>
        </Box>
        <Box
          sx={{
            paddingBottom: (theme) => theme.spacing(8),
          }}
        >
          <Link href="#" variant="caption" color="primary.light">
            View on etherscan
          </Link>
        </Box>
        <Box
          sx={{
            paddingBottom: (theme) => theme.spacing(10),
          }}
        >
          <Button variant="contained" onClick={onComplete}>
            Go to your portfolio
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Panel
      variant="dark"
      sx={{
        marginTop: 12,
        padding: 6,
        width: (theme) => theme.spacing(80),
        boxShadow: '0px 0px 60px rgba(255, 89, 156, 0.2)',
      }}
    >
      {renderStatus()}
      <Panel variant="main" sx={{ padding: 6 }}>
        <ProtocolInformation protocol={amm.protocol} fixedApr={amm.fixedApr} />
        <Box
          sx={{
            marginBottom: (theme) => theme.spacing(4),
          }}
        >
          <Typography label="NOTIONAL AMOUNT" variant="body2">
            {activeTransaction.notional} {amm.protocol}
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: (theme) => theme.spacing(4),
          }}
        >
          <Typography label="MARGIN" variant="body2">
            {activeTransaction.margin} {amm.protocol}
          </Typography>
        </Box>
      </Panel>
    </Panel>
  );
};

export default PendingTransaction;

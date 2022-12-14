import Box from '@mui/material/Box';
import { AMM, Position } from '@voltz-protocol/v1-sdk';
import React, { ReactNode, useCallback, useState } from 'react';

import { Loading } from '../../../components/atomic/Loading/Loading';
import { Panel } from '../../../components/atomic/Panel/Panel';
import { RouteLink } from '../../../components/atomic/RouteLink/RouteLink';
import { PendingTransaction } from '../../../components/interface/PendingTransaction/PendingTransaction';
import { PositionTable } from '../../../components/interface/PositionTable/PositionTable';
import { Agents } from '../../../contexts/AgentContext/types';
import { usePortfolioContext } from '../../../contexts/PortfolioContext/PortfolioContext';
import { usePositions } from '../../../hooks/usePositions/usePositions';
import { useWallet } from '../../../hooks/useWallet';
import { actions, selectors } from '../../../store';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { routes } from '../../paths';
import { PortfolioHeader } from './PortfolioHeader/PortfolioHeader';

export type ConnectedPositionTableProps = {
  onSelectItem: (item: Position, mode: 'margin' | 'liquidity' | 'rollover' | 'notional') => void;
  amm?: AMM;
  handleCompletedSettling: () => void;
};

export const ConnectedPositionTable: React.FunctionComponent<ConnectedPositionTableProps> = ({
  onSelectItem,
  handleCompletedSettling,
}) => {
  const { positionsByAgentGroup, loading } = usePositions();
  const { status } = useWallet();

  const [positionToSettle, setPositionToSettle] = useState<
    { txId: string; position: Position } | undefined
  >();
  const activeTransaction = useAppSelector(selectors.transactionSelector)(positionToSettle?.txId); // contains a failureMessage attribute that will contain whatever came out from the sdk
  const dispatch = useAppDispatch();

  const portfolioData = usePortfolioContext();

  const handleSettle = useCallback(
    (position: Position) => {
      const positionAmm = position.amm;
      const transaction = {
        notional: 0,
        margin: 0,
        ammId: positionAmm.id,
        agent: Agents.LIQUIDITY_PROVIDER,
        source: position.source,
        fixedLow: position.fixedRateLower.toNumber(),
        fixedHigh: position.fixedRateUpper.toNumber(),
      };
      const settlePositionAction = actions.settlePositionAction(positionAmm, transaction);
      setPositionToSettle({
        position,
        txId: settlePositionAction.payload.transaction.id,
      });
      dispatch(settlePositionAction);
    },
    [dispatch],
  );

  const handleTransactionFinished = () => {
    handleCompletedSettling();
    if (positionToSettle) {
      const action = actions.closeTransaction(positionToSettle.txId);
      dispatch(action);
      setPositionToSettle(undefined);
    }
  };

  const renderLoading = () => {
    return (
      <Panel sx={{ width: '100%' }} variant="grey-dashed">
        <Loading sx={{ margin: '0 auto' }} />
      </Panel>
    );
  };

  const renderNoPositions = () => {
    return (
      <Panel sx={{ width: '100%', textAlign: 'center' }} variant="main">
        <RouteLink to={`/${routes.LP_POOLS}`}>OPEN YOUR FIRST POSITION</RouteLink>
      </Panel>
    );
  };

  const renderPendingTransaction = () => {
    if (!positionToSettle) return null;

    const spData = portfolioData.info[positionToSettle.position.id];

    const netWithdraw =
      typeof spData?.fees === 'number' && typeof spData?.settlementCashflow === 'number'
        ? spData?.margin + spData?.settlementCashflow
        : undefined;

    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <PendingTransaction
          amm={positionToSettle.position.amm}
          isEditingMargin={false}
          isSettle={true}
          margin={netWithdraw}
          notional={Math.abs(positionToSettle.position.notional)}
          position={positionToSettle.position}
          transactionId={positionToSettle.txId}
          onBack={handleTransactionFinished}
          onComplete={handleTransactionFinished}
        />
      </Box>
    );
  };

  const renderPositionTable = () => {
    if (!positionsByAgentGroup) return null;

    return (
      <>
        <PortfolioHeader currencyCode="USD" currencySymbol="$" portfolioData={portfolioData} />
        <Box sx={{ marginTop: (theme) => theme.spacing(14) }}>
          <PositionTable
            portfolioData={portfolioData}
            positions={positionsByAgentGroup}
            onSelectItem={onSelectItem}
            onSettle={handleSettle}
          />
        </Box>
      </>
    );
  };

  const renderContent = () => {
    let content: ReactNode = null;

    if (activeTransaction && positionToSettle) {
      return renderPendingTransaction(); // We return this one immediately as we don't want it wrapped in a Panel
    } else if (loading || status === 'connecting') {
      content = renderLoading();
    } else if (!positionsByAgentGroup) {
      content = renderNoPositions();
    } else {
      content = renderPositionTable();
    }

    return <Box sx={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>{content}</Box>;
  };

  return renderContent();
};
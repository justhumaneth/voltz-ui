import { Position } from '@voltz-protocol/v1-sdk';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { useAgent } from '../../hooks/useAgent';
import {
  getHealthCounters,
  getNetPayingRate,
  getNetReceivingRate,
  getTotalAccruedCashflow,
  getTotalMargin,
  getTotalNotional,
} from './services';

export type PortfolioProviderProps = {
  positions?: Position[];
};

export type PortfolioContext = {
  loadPosition: (position: Position) => void;
  positions: Position[];
  healthCounters: { danger: number; warning: number; healthy: number } | undefined;
  totalNotional: number | undefined;
  totalMargin: number | undefined;
  totalAccruedCashflow: number | undefined;
  netReceivingRate: number | undefined;
  netPayingRate: number | undefined;
};

const PortfolioCtx = createContext<PortfolioContext>({} as unknown as PortfolioContext);
PortfolioCtx.displayName = 'PortfolioContext';

export const PortfolioProvider: React.FunctionComponent<PortfolioProviderProps> = ({
  children,
  positions,
}) => {
  const [healthCounters, setHealthCounters] =
    useState<{ danger: number; warning: number; healthy: number }>();
  const [totalNotional, setTotalNotional] = useState<number | undefined>();
  const [totalMargin, setTotalMargin] = useState<number | undefined>();
  const [totalAccruedCashflow, setTotalAccruedCashflow] = useState<number | undefined>();
  const [netReceivingRate, setNetReceivingRate] = useState<number | undefined>();
  const [netPayingRate, setNetPayingRate] = useState<number | undefined>();

  const { agent } = useAgent();
  useEffect(() => {
    if (positions && positions.length !== 0 && positions.every((p) => p.initialized)) {
      setHealthCounters(getHealthCounters(positions));
      setTotalNotional(getTotalNotional(positions));
      setTotalMargin(getTotalMargin(positions));
      setTotalAccruedCashflow(getTotalAccruedCashflow(positions));
      setNetReceivingRate(getNetReceivingRate(positions, agent));
      setNetPayingRate(getNetPayingRate(positions, agent));
    }
  }, [agent, positions]);

  const value = {
    positions,
    healthCounters,
    totalNotional,
    totalMargin,
    totalAccruedCashflow,
    netReceivingRate,
    netPayingRate,
  } as PortfolioContext;

  return <PortfolioCtx.Provider value={value}>{children}</PortfolioCtx.Provider>;
};

export const usePortfolioContext = () => useContext(PortfolioCtx);

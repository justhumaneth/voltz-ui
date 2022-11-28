import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useAMMsContext } from '../AMMsContext/AMMsContext';
import {
  getHealthCounters,
  getNetPayingRate,
  getNetReceivingRate,
  getTotalAccruedCashflow,
  getTotalMargin,
  getTotalNotional,
} from './services';

import { Position, PositionInfo } from '@voltz-protocol/v1-sdk';
import { useAgent } from '../../hooks/useAgent';

export type PortfolioProviderProps = {
  positions?: Position[];
};

export type PortfolioContext = {
  loadPosition: (position: Position) => void;
  info: Record<Position['id'], PositionInfo>;
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
  const info = useRef<Record<Position['id'], PositionInfo>>({});
  const [loaded, setLoaded] = useState<string>('');
  const [healthCounters, setHealthCounters] =
    useState<{ danger: number; warning: number; healthy: number }>();
  const [totalNotional, setTotalNotional] = useState<number | undefined>();
  const [totalMargin, setTotalMargin] = useState<number | undefined>();
  const [totalAccruedCashflow, setTotalAccruedCashflow] = useState<number | undefined>();
  const [netReceivingRate, setNetReceivingRate] = useState<number | undefined>();
  const [netPayingRate, setNetPayingRate] = useState<number | undefined>();

  const { agent } = useAgent();

  const { positionsInfo, cachePositionInfo } = useAMMsContext();

  useEffect(() => {
    info.current = {};
    if (positions) {
      for (let i = 0; i < positions.length; i++) {
        void loadPositionInfo(positions[i]);
      }
    }
  }, [positions]);

  useEffect(() => {
    if (
      loaded.length > 0 &&
      positions &&
      positions.length > 0 &&
      info.current &&
      Object.keys(info.current).length === positions.length
    ) {
      setHealthCounters(getHealthCounters(positions, info.current));
      setTotalNotional(getTotalNotional(positions, info.current));
      setTotalMargin(getTotalMargin(positions, info.current));
      setTotalAccruedCashflow(getTotalAccruedCashflow(positions, info.current));
      setNetReceivingRate(getNetReceivingRate(positions, info.current, agent));
      setNetPayingRate(getNetPayingRate(positions, info.current, agent));
    }
  }, [loaded]);

  const loadPositionInfo = (position: Position) => {
    const posInfo = positionsInfo[position.id];
    if (posInfo) {
      info.current[position.id] = posInfo;
      setLoaded(JSON.stringify(info.current));
    } else {
      position.amm
        .getPositionInformation(position)
        .then((pInfo) => {
          info.current[position.id] = pInfo;
          cachePositionInfo(pInfo, position);
          setLoaded(JSON.stringify(info.current));
        })
        .catch((e) => {
          loadPositionInfo(position);
        });
    }
  };

  const value = {
    loadPosition: loadPositionInfo,
    info: info.current,
    positions: positions,
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

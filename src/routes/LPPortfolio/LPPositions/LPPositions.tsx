import Box from '@mui/material/Box';
import { AMM, Position } from '@voltz-protocol/v1-sdk';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ConnectedMintBurnForm } from '../../../components/containers/ConnectedMintBurnForm/ConnectedMintBurnForm';
import { AMMProvider } from '../../../contexts/AMMContext/AMMContext';
import {
  MintBurnFormModes,
  MintBurnFormProvider,
} from '../../../contexts/MintBurnFormContext/MintBurnFormContext';
import { PortfolioProvider } from '../../../contexts/PortfolioContext/PortfolioContext';
import { PositionProvider } from '../../../contexts/PositionContext/PositionContext';
import { useAMMs } from '../../../hooks/useAMMs';
import { usePositions } from '../../../hooks/usePositions/usePositions';
import { useWallet } from '../../../hooks/useWallet';
import { findCurrentAmm } from '../../../utilities/amm';
import { setPageTitle } from '../../../utilities/page';
import { ConnectedPositionTable } from '../ConnectedPositionTable/ConnectedPositionTable';

export const LPPositions: React.FunctionComponent = () => {
  const [amm, setAMM] = useState<AMM>();
  const [formMode, setFormMode] = useState<MintBurnFormModes>();
  const [position, setPosition] = useState<Position>();
  const [settling, setSettling] = useState<boolean>(false);

  const { amms } = useAMMs();
  const { key } = useLocation();
  const { positionsByAgentGroup } = usePositions();
  const { account } = useWallet();

  const renderMode = formMode ? 'form' : 'portfolio';

  useEffect(() => {
    setFormMode(undefined);
    setAMM(undefined);
    setPosition(undefined);
  }, [setFormMode, setAMM]);

  useEffect(() => {
    handleReset();
  }, [key]);

  useEffect(() => {
    switch (renderMode) {
      case 'portfolio': {
        setPageTitle('Liquidity Provider Portfolio', account);
        break;
      }
      case 'form': {
        setPageTitle(`${position ? 'Edit' : 'New'} Liquidity Provider Position`, account);
        break;
      }
    }
  }, [setPageTitle, renderMode, position]);

  const handleSelectPosition = (
    selectedPosition: Position,
    mode: 'margin' | 'liquidity' | 'rollover' | 'notional',
  ) => {
    let newMode: MintBurnFormModes | undefined = undefined;
    if (mode === 'margin') newMode = MintBurnFormModes.EDIT_MARGIN;
    if (mode === 'liquidity') newMode = MintBurnFormModes.EDIT_LIQUIDITY;
    if (mode === 'rollover') newMode = MintBurnFormModes.ROLLOVER;

    setFormMode(newMode);
    setAMM(
      mode === 'rollover' ? findCurrentAmm(amms || [], selectedPosition) : selectedPosition.amm,
    );
    setPosition(selectedPosition);
  };

  const handleCompletedSettling = () => {
    setSettling(!settling);
  };

  const handleReset = () => {
    setFormMode(undefined);
    setAMM(undefined);
    setPosition(undefined);
  };

  return (
    <>
      {renderMode === 'portfolio' && (
        <PortfolioProvider positions={positionsByAgentGroup}>
          <ConnectedPositionTable
            amm={amm}
            handleCompletedSettling={handleCompletedSettling}
            onSelectItem={handleSelectPosition}
          />
        </PortfolioProvider>
      )}

      {renderMode === 'form' && (
        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
          {amm && (
            <AMMProvider amm={amm}>
              <PositionProvider position={position}>
                <MintBurnFormProvider mode={formMode as MintBurnFormModes}>
                  <ConnectedMintBurnForm onReset={handleReset} />
                </MintBurnFormProvider>
              </PositionProvider>
            </AMMProvider>
          )}
        </Box>
      )}
    </>
  );
};
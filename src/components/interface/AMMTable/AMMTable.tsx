import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import { Panel } from '../../atomic/Panel/Panel';
import { AMMTableHead, AMMTableRow } from './components';
import { DateTime } from 'luxon';

import { AMM } from '@voltz-protocol/v1-sdk';
import { commonOverrides } from './styles';
import { isBorrowing } from '../../../utilities/isBorrowing';
import { Agents } from '../../../contexts/AgentContext/types';
import { useAgent } from '../../../hooks/useAgent';
import { AMMProvider } from '../../../contexts/AMMContext/AMMContext';

export type AMMTableProps = {
  onSelectItem: (amm: AMM) => void;
  loading: boolean;
  amms: AMM[];
  error: boolean;
};

export const AMMTable: React.FunctionComponent<AMMTableProps> = ({
  amms,
  loading,
  error,
  onSelectItem,
}) => {
  const { agent } = useAgent();

  if (error || loading) {
    return null;
  }

  return (
    <Panel
      variant={agent === Agents.LIQUIDITY_PROVIDER ? 'darker' : 'dark'}
      borderRadius="large"
      padding="container"
      sx={{ paddingTop: 0, paddingBottom: 0 }}
    >
      <TableContainer>
        <Table
          sx={{
            borderCollapse: 'separate',
            borderSpacing: '0px 16px',
            ...commonOverrides,
          }}
          aria-labelledby="tableTitle"
          size="medium"
        >
          <AMMTableHead />
          <TableBody sx={{ position: 'relative', top: (theme) => `-${theme.spacing(3)}` }}>
            {amms
              .filter((amm) => DateTime.now() < amm.endDateTime)
              .map((amm) => (
                <AMMProvider amm={amm} key={amm.id}>
                  <AMMTableRow
                    protocol={amm.protocol}
                    isBorrowing={isBorrowing(amm.rateOracle.protocolId)}
                    startDate={amm.startDateTime}
                    endDate={amm.endDateTime}
                    onSelect={() => onSelectItem(amm)}
                  />
                </AMMProvider>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Panel>
  );
};

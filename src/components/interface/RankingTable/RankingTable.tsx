import React from 'react';
import { Typography } from '@components/atomic';
import { Grid } from '@components/layout';
import { Box, Button } from '@mui/material';
import { RankType } from 'src/utilities/data';
import { DateTime } from 'luxon';
import { colors } from '@theme';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import { RankingEntry } from './components/RankingEntry';
import { RankingHeader } from './components/RankingHeader';
import RankingTableHeader from './components/RankingTableHeader';

export type RankingTableProps = {
  rankings: RankType[];
  seasonNumber: string;
  seasonStartDate: DateTime;
  seasonEndDate: DateTime;
  maxPages: number;
  page: number;
  userRank: number;
  userPoints: number;
  userAddress: string;
  loading: boolean;
  onNextPage: () => void;
  onPrevPage: () => void;
  perPage: number;
};

const inRange = (start: number, end: number, num: number) => start <= num && num <= end;

const RankingTable: React.FunctionComponent<RankingTableProps> = ({
  rankings,
  seasonNumber,
  seasonStartDate,
  seasonEndDate,
  maxPages,
  userRank,
  userAddress,
  userPoints,
  loading,
  page,
  onNextPage,
  onPrevPage,
  perPage,
}) => {
  return (
    <Box>
      <RankingTableHeader
        loading={loading}
        seasonNumber={seasonNumber}
        seasonStartDate={seasonStartDate}
        seasonEndDate={seasonEndDate}
        userRank={userRank}
        userAddress={userAddress}
        userPoints={userPoints}
      />
      <Typography
        variant="body2"
        sx={{
          fontSize: '24px',
          marginTop: (theme) => theme.spacing(4),
          fontWeight: 700,
          display: 'flex',
          alignContent: 'center',
        }}
      >
        SEASON {seasonNumber} LEADERBOARD
      </Typography>
      <Grid
        itemsPerRow={1}
        sx={{
          marginTop: (theme) => theme.spacing(6),
          rowGap: (theme) => theme.spacing(2),
        }}
      >
        <RankingHeader />
        {!loading &&
          rankings.length !== 0 &&
          rankings.map((ranking, index) => {
            const rank = index + 1 + page * perPage;
            return (
              <RankingEntry
                key={index}
                points={ranking.points}
                rank={rank}
                address={ranking.address}
                variant={
                  rank === userRank + 1
                    ? 'me'
                    : rank === 1
                    ? 'rank1'
                    : rank === 2
                    ? 'rank2'
                    : rank === 3
                    ? 'rank3'
                    : 'other'
                }
              />
            );
          })}
        {loading &&
          Array.from({ length: 10 }, () => ({})).map((ranking, index) => {
            return (
              <RankingEntry
                points={index}
                rank={index}
                variant={'rank1'}
                address={''}
                loading={true}
                key={index}
              />
            );
          })}
        {!loading && !inRange(page * perPage, page * perPage + perPage, userRank) && (
          <RankingEntry
            points={userPoints}
            rank={userRank + 1}
            address={userAddress}
            variant="me"
          />
        )}
      </Grid>
      {!loading && (
        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: (theme) => theme.spacing(4) }}
        >
          <Button
            onClick={onPrevPage}
            variant={'text'}
            sx={{
              fontSize: '12px',
              lineHeight: '12px',
              color: colors.lavenderWeb.base,
              padding: (theme) => theme.spacing(2),
            }}
            startIcon={
              <ChevronLeft sx={{ width: 14, height: 14, color: colors.lavenderWeb.base }} />
            }
          >
            PREVIOUS 01
          </Button>
          <Box
            sx={{
              width: '96px',
              background: colors.lavenderWeb.darken030,
              margin: (theme) => theme.spacing(2),
            }}
          >
            <Box
              sx={{
                width: `${Math.min(((page + 1) * 100) / maxPages, 100)}%`,
                background: colors.lavenderWeb.base,
                height: '100%',
                transition: 'width 500ms ease-in',
              }}
            />
          </Box>
          <Button
            onClick={onNextPage}
            variant={'text'}
            endIcon={
              <ChevronRight sx={{ width: 14, height: 14, color: colors.lavenderWeb.base }} />
            }
            sx={{
              fontSize: '12px',
              lineHeight: '12px',
              color: colors.lavenderWeb.base,
              padding: (theme) => theme.spacing(2),
            }}
          >
            {maxPages.toString().padStart(2, '0')} NEXT
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default RankingTable;

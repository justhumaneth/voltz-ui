import { CommunitySBT, SBTConstructorArgs } from '@voltz-protocol/v1-sdk';
import { Signer } from 'ethers';

import { Season } from '../../hooks/season/types';
import { isEnvVarProvided } from '../../utilities/is-env-var-provided';
import { ClaimButtonProps } from './components/ClaimButton/ClaimButton';
import { BadgeVariant } from './data/getSeasonBadges';
import { BadgeTier } from './types';

export const BADGE_VARIANT_TRADER_LP_MAP: Record<BadgeVariant, 'trader' | 'lp' | ''> = {
  // season 1
  degenStuff: 'trader',
  deltaDegen: 'trader',
  irsConnoisseur: 'trader',
  leverageCrowbar: 'trader',
  fixedTrader: 'trader',
  sushiRoll: 'trader',
  topTrader: 'trader',
  beWaterMyFriend: 'lp',
  rainMaker: 'lp',
  waterHose: 'lp',
  moneyMoneyMoney: 'lp',
  lpoor: 'lp',
  yikes: 'trader',
  maxBidding: 'trader',
  okBoomer: 'trader',
  dryIce: 'lp',
  mellowLpVault: 'lp',
  mellowLpVaultTier1: 'lp',
  mellowLpVaultTier2: 'lp',
  mellowLpVaultTier3: 'lp',
  '0BCMellowLpVault': 'lp',
  // season OG
  ogDegenStuff: 'trader',
  ogDeltaDegen: 'trader',
  ogIrsConnoisseur: 'trader',
  ogLeverageCrowbar: 'trader',
  ogFixedTrader: 'trader',
  ogSushiRoll: 'trader',
  ogTopTrader: 'trader',
  ogBeWaterMyFriend: 'lp',
  ogRainMaker: 'lp',
  ogWaterHose: 'lp',
  ogMoneyMoneyMoney: 'lp',
  ogLpoor: 'lp',
  ogYikes: 'trader',
  ogMaxBidding: 'trader',
  ogOkBoomer: 'trader',
  ogDryIce: 'lp',
  // season 2
  s2DegenStuff: 'trader',
  s2DeltaDegen: 'trader',
  s2IrsConnoisseur: 'trader',
  s2LeverageCrowbar: 'trader',
  s2FixedTrader: 'trader',
  s2SushiRoll: 'trader',
  s2TopTrader: 'trader',
  s2BeWaterMyFriend: 'lp',
  s2RainMaker: 'lp',
  s2WaterHose: 'lp',
  s2MoneyMoneyMoney: 'lp',
  s2Lpoor: 'lp',
  s2Yikes: 'trader',
  s2MaxBidding: 'trader',
  s2MellowLpVaultTier1: 'lp',
  s2MellowLpVaultTier2: 'lp',
  s2MellowLpVaultTier3: 'lp',
  // season1, season2 & og non-programmatic badges
  governorz: '',
  diplomatz: '',
  senatorz: '',
  referror: '',
  notionalInfluencer: '',
  whaleWhisperer: '',
};

export const TIER_COPY_MAP: Record<BadgeTier, string> = {
  tier1: 'TIER 1',
  tier2: 'TIER 2',
  tier3: 'TIER 3',
  legendary: 'LEGENDARY',
  easterEgg: 'EASTER EGG',
};

export const BADGE_VARIANT_TITLE_COPY_MAP: Record<BadgeVariant, string> = {
  // season 1
  degenStuff: 'DEGEN STUFF',
  deltaDegen: 'DELTA DEGEN',
  irsConnoisseur: 'IRS CONNOISSEUR',
  leverageCrowbar: 'LEVERAGE CROWBAR',
  fixedTrader: 'FIXED TAKER',
  sushiRoll: 'SUSHI ROLL',
  topTrader: 'TOP TRADER',
  beWaterMyFriend: 'BE WATER MY FRIEND',
  rainMaker: 'RAIN MAKER',
  waterHose: 'WATER HOSE',
  moneyMoneyMoney: 'MONEY MONEY MONEY',
  lpoor: 'LPOOR',
  yikes: 'YIKES',
  maxBidding: 'MAX BIDDING',
  okBoomer: 'OK BOOMER',
  dryIce: 'DRY ICE',
  mellowLpVault: 'MELLOW VAULT OPTIMIZOOOOOR',
  mellowLpVaultTier1: 'VAULTOOOR',
  mellowLpVaultTier2: 'MIDDLEWEIGHT VAULTOOOR',
  mellowLpVaultTier3: 'WHALE VAULTOOOR',
  '0BCMellowLpVault': '0BC Vault',
  // season OG
  ogDegenStuff: 'DEGEN STUFF',
  ogDeltaDegen: 'DELTA DEGEN',
  ogIrsConnoisseur: 'IRS CONNOISSEUR',
  ogLeverageCrowbar: 'LEVERAGE CROWBAR',
  ogFixedTrader: 'FIXED TAKER',
  ogSushiRoll: 'SUSHI ROLL',
  ogTopTrader: 'TOP TRADER',
  ogBeWaterMyFriend: 'BE WATER MY FRIEND',
  ogRainMaker: 'RAIN MAKER',
  ogWaterHose: 'WATER HOSE',
  ogMoneyMoneyMoney: 'MONEY MONEY MONEY',
  ogLpoor: 'LPOOR',
  ogYikes: 'YIKES',
  ogMaxBidding: 'MAX BIDDING',
  ogOkBoomer: 'OK BOOMER',
  ogDryIce: 'DRY ICE',
  // season 1
  s2DegenStuff: 'DEGEN STUFF',
  s2DeltaDegen: 'DELTA DEGEN',
  s2IrsConnoisseur: 'IRS CONNOISSEUR',
  s2LeverageCrowbar: 'LEVERAGE CROWBAR',
  s2FixedTrader: 'FIXED TAKER',
  s2SushiRoll: 'SUSHI ROLL',
  s2TopTrader: 'TOP TRADER',
  s2BeWaterMyFriend: 'BE WATER MY FRIEND',
  s2RainMaker: 'RAIN MAKER',
  s2WaterHose: 'WATER HOSE',
  s2MoneyMoneyMoney: 'MONEY MONEY MONEY',
  s2Lpoor: 'LPOOR',
  s2Yikes: 'YIKES',
  s2MaxBidding: 'MAX BIDDING',
  s2MellowLpVaultTier1: 'VAULTOOOR',
  s2MellowLpVaultTier2: 'MIDDLEWEIGHT VAULTOOOR',
  s2MellowLpVaultTier3: 'WHALE VAULTOOOR',
  // season1, season2 & og non-programmatic badges
  governorz: 'GOVERNORZ',
  diplomatz: 'DIPLOMATZ',
  senatorz: 'SENATORZ',
  referror: 'REFERROR',
  notionalInfluencer: 'NOTIONAL INFLUENCER',
  whaleWhisperer: 'WHALE WHISPERER',
};

export const BADGE_VARIANT_DESCRIPTION_COPY_MAP: Record<BadgeVariant, string> = {
  // season 1
  degenStuff: '500k+ is serious levels of notional. Hats off to the degen king.',
  deltaDegen: 'Only degens can see the delta on that variable position.',
  irsConnoisseur: 'A true degen acts like a pro and has at least 3+ positions.',
  leverageCrowbar: 'There is no degen without 100x leverage, and you are a degen.',
  fixedTrader: 'Comfy and stable with a fixed taker position.',
  sushiRoll: 'Stopping for nothing, rolling over the next pool.',
  topTrader: 'Top 5 finisher during this season. View from the top looks nice.',
  beWaterMyFriend: 'A top 5 Liquidity Provider finish this season.',
  rainMaker: 'No luck needed for the degen gods. Going big 500k+ notional provided.',
  waterHose: 'You left no pool unturned, provided liquidity to 3+ pools.',
  moneyMoneyMoney: '100x leverage. You provided real liquidity here, market maker status.',
  lpoor: 'You provided liquidity and the protocol just got a little more robust.',
  yikes: 'Oof you’re the largest liquidation this season. There was no second best.',
  maxBidding: 'There is only one button on your keyboard: max bidding, max leverage',
  okBoomer: '2x leverage is OK. We all start somewhere, you just started small.',
  dryIce: 'Providing liquidity but below 2x notional.',
  mellowLpVault: 'Providing liquidity for the highest performance.',
  mellowLpVaultTier1: 'LP, sit back and relax.',
  mellowLpVaultTier2: 'Easy LPing with LP Optimisers.',
  mellowLpVaultTier3: 'Largest fish in the vaults.',
  '0BCMellowLpVault': 'Thanks for being part of something new.',
  // season OG
  ogDegenStuff: '500k+ is serious levels of notional. Hats off to the degen king.',
  ogDeltaDegen: 'Only degens can see the delta on that variable position.',
  ogIrsConnoisseur: 'A true degen acts like a pro and has at least 3+ positions.',
  ogLeverageCrowbar: 'There is no degen without 100x leverage, and you are a degen.',
  ogFixedTrader: 'Comfy and stable with a fixed taker position.',
  ogSushiRoll: 'Stopping for nothing, rolling over the next pool.',
  ogTopTrader: 'Top 5 finisher during this season. View from the top looks nice.',
  ogBeWaterMyFriend: 'A top 5 Liquidity Provider finish this season.',
  ogRainMaker: 'No luck needed for the degen gods. Going big 500k+ notional provided.',
  ogWaterHose: 'You left no pool unturned, provided liquidity to 3+ pools.',
  ogMoneyMoneyMoney: '100x leverage. You provided real liquidity here, market maker status.',
  ogLpoor: 'You provided liquidity and the protocol just got a little more robust.',
  ogYikes: 'Oof you’re the largest liquidation this season. There was no second best.',
  ogMaxBidding: 'There is only one button on your keyboard: max bidding, max leverage',
  ogOkBoomer: '2x leverage is OK. We all start somewhere, you just started small.',
  ogDryIce: 'Providing liquidity but below 2x notional.',
  // season 1
  s2DegenStuff: '500k+ is serious levels of notional. Hats off to the degen king.',
  s2DeltaDegen: 'Only degens can see the delta on that variable position.',
  s2IrsConnoisseur: 'A true degen acts like a pro and has at least 3+ positions.',
  s2LeverageCrowbar: 'There is no degen without 100x leverage, and you are a degen.',
  s2FixedTrader: 'Comfy and stable with a fixed taker position.',
  s2SushiRoll: 'Stopping for nothing, rolling over the next pool.',
  s2TopTrader: 'Top 5 finisher during this season. View from the top looks nice.',
  s2BeWaterMyFriend: 'A top 5 Liquidity Provider finish this season.',
  s2RainMaker: 'No luck needed for the degen gods. Going big 500k+ notional provided.',
  s2WaterHose: 'You left no pool unturned, provided liquidity to 3+ pools.',
  s2MoneyMoneyMoney: '100x leverage. You provided real liquidity here, market maker status.',
  s2Lpoor: 'You provided liquidity and the protocol just got a little more robust.',
  s2Yikes: 'Oof you’re the largest liquidation this season. There was no second best.',
  s2MaxBidding: 'There is only one button on your keyboard: max bidding, max leverage',
  s2MellowLpVaultTier1: 'LP, sit back and relax.',
  s2MellowLpVaultTier2: 'Easy LPing with LP Optimisers.',
  s2MellowLpVaultTier3: 'Largest fish in the vaults.',
  // season1, season2 & og non-programmatic badges
  diplomatz: 'For those supporting thousands speaking in different languages.',
  senatorz: 'For supporting Voltz community beyond the unthinkable.',
  governorz: 'For being there and contributing to the layer 0 of our community.',
  referror:
    'You brought quite a crew with you. Voltz is built to empower DeFi and your help has been rewarded.',
  notionalInfluencer:
    'New achievement unlocked, all those referrals are paving the way to new DeFi pillars.',
  whaleWhisperer:
    "At this point you are a Voltz influencer, you've reached the highest level and are walking among IRS gods.",
};

export const BADGE_VARIANT_TIER_MAP: Record<BadgeVariant, BadgeTier> = {
  // season 1
  degenStuff: 'tier3',
  deltaDegen: 'tier1',
  irsConnoisseur: 'tier2',
  leverageCrowbar: 'tier2',
  fixedTrader: 'tier1',
  sushiRoll: 'tier2',
  topTrader: 'legendary',
  beWaterMyFriend: 'legendary',
  rainMaker: 'tier3',
  waterHose: 'tier2',
  moneyMoneyMoney: 'tier2',
  lpoor: 'tier1',
  yikes: 'easterEgg',
  maxBidding: 'easterEgg',
  okBoomer: 'easterEgg',
  dryIce: 'easterEgg',
  mellowLpVault: 'tier1',
  mellowLpVaultTier1: 'tier1',
  mellowLpVaultTier2: 'tier2',
  mellowLpVaultTier3: 'tier3',
  '0BCMellowLpVault': 'tier1',
  // season og
  ogDegenStuff: 'tier3',
  ogDeltaDegen: 'tier1',
  ogIrsConnoisseur: 'tier2',
  ogLeverageCrowbar: 'tier2',
  ogFixedTrader: 'tier1',
  ogSushiRoll: 'tier2',
  ogTopTrader: 'legendary',
  ogBeWaterMyFriend: 'legendary',
  ogRainMaker: 'tier3',
  ogWaterHose: 'tier2',
  ogMoneyMoneyMoney: 'tier2',
  ogLpoor: 'tier1',
  ogYikes: 'easterEgg',
  ogMaxBidding: 'easterEgg',
  ogOkBoomer: 'easterEgg',
  ogDryIce: 'easterEgg',
  // season 2
  s2DegenStuff: 'tier3',
  s2DeltaDegen: 'tier1',
  s2IrsConnoisseur: 'tier2',
  s2LeverageCrowbar: 'tier2',
  s2FixedTrader: 'tier1',
  s2SushiRoll: 'tier2',
  s2TopTrader: 'legendary',
  s2BeWaterMyFriend: 'legendary',
  s2RainMaker: 'tier3',
  s2WaterHose: 'tier2',
  s2MoneyMoneyMoney: 'tier2',
  s2Lpoor: 'tier1',
  s2Yikes: 'easterEgg',
  s2MaxBidding: 'easterEgg',
  s2MellowLpVaultTier1: 'tier1',
  s2MellowLpVaultTier2: 'tier2',
  s2MellowLpVaultTier3: 'tier3',
  // season1, season2 & og non-programmatic badges
  governorz: 'tier1',
  diplomatz: 'tier2',
  senatorz: 'tier3',
  referror: 'tier1',
  notionalInfluencer: 'tier2',
  whaleWhisperer: 'tier3',
};

export const getClaimButtonModesForVariants = (
  variants: BadgeVariant[],
  mode: ClaimButtonProps['mode'],
): Record<BadgeVariant, ClaimButtonProps['mode']> =>
  variants.reduce(
    (pV, cI) => ({
      ...pV,
      [cI]: mode,
    }),
    {} as Record<BadgeVariant, ClaimButtonProps['mode']>,
  );

export const getSeasonUserId = (userId: string, seasonId: Season['id']) =>
  `${userId.toLowerCase()}#${seasonId}`;

export const getCommunitySbt = (signer: Signer | null) => {
  const ignoredWalletIds =
    process.env.REACT_APP_IGNORED_LEAGUE_WALLETS &&
    process.env.REACT_APP_IGNORED_LEAGUE_WALLETS !== 'UNPROVIDED'
      ? process.env.REACT_APP_IGNORED_LEAGUE_WALLETS.split(',')
          .map((s) => s.trim().toLowerCase())
          .reduce((pV, cV) => ({ ...pV, [cV]: true }), {})
      : {};
  const badgesCids = parseCidsList(process.env.REACT_APP_BADGES_IPFS_CIDS);
  const leavesCids = parseCidsList(process.env.REACT_APP_LEAVES_IPFS_CIDS);
  const params: SBTConstructorArgs = {
    id: process.env.REACT_APP_COMMUNITY_SBT_ADDRESS || '',
    signer: signer,
    currentBadgesSubgraphUrl: process.env.REACT_APP_CURRENT_SUBGRAPH_BADGES_URL,
    nextBadgesSubgraphUrl: process.env.REACT_APP_NEXT_SUBGRAPH_BADGES_URL,
    nonProgDbUrl: process.env.REACT_APP_DB_BADGES_URL,
    referralsDbUrl: process.env.REACT_APP_REFERRAL_AND_SIGNATURE_SERVICE_URL,
    subgraphUrl: process.env.REACT_APP_SUBGRAPH_URL,
    coingeckoKey: process.env.REACT_APP_COINGECKO_API_KEY,
    ignoredWalletIds: ignoredWalletIds,
    badgesCids: badgesCids,
    leavesCids: leavesCids,
  };
  return new CommunitySBT(params);
};

const parseCidsList = (cidsEnvVar: string | undefined): Array<string> => {
  return isEnvVarProvided(cidsEnvVar) ? cidsEnvVar!.split(',').map((s) => s.trim()) : [];
};

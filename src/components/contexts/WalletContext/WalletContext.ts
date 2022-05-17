import { createContext } from 'react';

import { Wallet, WalletName } from './types';

const defaultConnect = (name: WalletName) => Promise.resolve();

const WalletContext = createContext<Wallet>({
  status: 'initializing',
  connect: defaultConnect,
  account: null,
  name: null,
  signer: null,
  balance: null,
  setBalance: (_balance: number) => undefined,
  wallet: null,
  loading: false,
  error: false,
  required: false,
  setRequired: (_required: boolean) => undefined,
  walletError: null
});

export default WalletContext;

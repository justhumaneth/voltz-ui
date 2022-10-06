import { WalletName, WalletRiskAssessment } from './types';
import detectEthereumProvider from '@metamask/detect-provider';
import WalletConnectProvider from '@walletconnect/ethereum-provider';
import { ethers } from 'ethers';

export type SignatureResponse = {
  signature?: string;
  timestamp?: string;
  walletAddress?: string;
  referrer?: string;
};

const unavailableText = 'Service unavailable, please try again shortly';

/**
 * Will throw an error if the connected ethereum network does not match required network set in .env file
 * @param provider - The ethers-wrapped provider
 */
export const checkForCorrectNetwork = async (provider: ethers.providers.JsonRpcProvider) => {
  const network = await provider.getNetwork();
  if (network.name !== process.env.REACT_APP_REQUIRED_ETHEREUM_NETWORK) {
    // eslint-disable-next-line
    console.warn(
      `User wallet is connected to '${network.name}' instead of '${
        process.env.REACT_APP_REQUIRED_ETHEREUM_NETWORK || '<unknown>'
      }'`,
    );
    throw new Error('Wrong network');
  }
};

/**
 * Will throw an error if the given wallet address is deemed as risky (has a shady history)
 * @param walletAddress - the wallet address to check
 */
export const checkForRiskyWallet = async (walletAddress: string) => {
  const riskAssessment = await getWalletRiskAssessment(walletAddress);
  if (isWalletRisky(riskAssessment)) {
    throw new Error('Risky Account Detected');
  }
};

/**
 * Will make the wallet open a prompt, asking the user to agree to the T&Cs. It will throw an
 * error if the user disagrees / closes the window. The signature is stored in a database to
 * avoid having to sign the terms every time you connect your wallet.
 * @param signer - The ethers signer
 */
export const checkForTOSSignature = async (
  signer: ethers.providers.JsonRpcSigner,
  walletAddress: string,
) => {
  const signerAddress = await signer.getAddress();
  const signatureData = await getSignature(signerAddress);
  let termsAccepted = false;

  if (signatureData?.signature) {
    const existingTOSSignerAddress = ethers.utils.verifyMessage(
      // getTOSText(signatureData?.referrer || null),
      getTOSText(null),
      signatureData.signature,
    );
    if (existingTOSSignerAddress === signerAddress) {
      termsAccepted = true;
    }
  }

  // const referrer = localStorage.getItem('invitedBy') || '';

  if (!termsAccepted) {
    try {
      // const termsOfService = getTOSText(referrer);
      const termsOfService = getTOSText(null);
      const signature = await signer.signMessage(termsOfService);
      // TODO: include the referrer details within the signed text, and send
      // the signed text along with the signature for verification on the backend
      await saveSignatureWithTOS(signerAddress, signature, termsOfService);
    } catch (e) {
      throw new Error('Error processing signature');
    }
  }
};

/**
 * Retrieves signature data via the signatures API for the given wallet address
 * @param walletAddress - the wallet address to retrieve the signature for
 */
export const getSignature = async (walletAddress: string) => {
  try {
    const resp = await fetch(
      `https://hackathon-rest-api.herokuapp.com/get-signature/${walletAddress}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    // https://hackathon-rest-api.herokuapp.com/get-signature/0x45556408e543158f74403e882E3C8c23eCD9f732

    if (resp.ok) {
      return (await resp.json()) as SignatureResponse;
    } else if (resp.status === 404) {
      return undefined; // API is ok, but the signature wasn't found
    } else {
      throw await resp.text();
    }
  } catch (e) {
    // eslint-disable-next-line
    console.warn('TOS check failed', e);
    throw new Error(unavailableText);
  }
};

/**
 * Retrieves referral data via the referral API for all wallet addresses
 */
// export const getAllReferrals = async (): Promise<{ [s: string]: string[] }> => {
//   try {
//     const resp = await fetch(`https://hackathon-rest-api.herokuapp.com/referrals`, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (resp.ok) {
//       const json = (await resp.json()) as { [s: string]: string[] };
//       return json;
//     } else if (resp.status === 404) {
//       return {}; // No referrals found
//     } else {
//       throw await resp.text();
//     }
//   } catch (e) {
//     // eslint-disable-next-line
//     console.warn('Error getting referrals', e);
//     throw e;
//   }
// };

/**
 * Returns the terms of service text that users have to agree to to connect their wallet.
 * Note - Any changes, including whitespace, will mean a new signature is required.
 */
export const getTOSText = (referrer: string | null) => {
  const text = `
Please sign this message to log in. This won't cost you any ETH!

By signing, you accept Voltz's Terms of Service, which you can find here:
${process.env.REACT_APP_TOS_URL || ''}
${
  referrer
    ? `
Your account and the account that invited you (${referrer}) may both receive additional Voltz Pointz, based on your use of the protocol. 
`
    : ``
}
If you're connecting a hardware wallet, you'll need to sign the message on your device too.`;

  return text.trim();
};

/**
 * Attemps to get an ethers-wrapped provider for the given wallet name
 * @param name - The wallet name (E.G: metamask)
 */
export const getWalletProvider = async (name: WalletName) => {
  switch (name) {
    case 'metamask':
      return await getWalletProviderMetamask();
    case 'walletConnect':
      return await getWalletProviderWalletConnect();
  }
};

/**
 * Returns an ethers Web3Provider, which wraps the Metamask instance
 */
export const getWalletProviderMetamask = async () => {
  const externalProvider = await detectEthereumProvider();
  if (externalProvider) {
    try {
      const provider = new ethers.providers.Web3Provider(
        externalProvider as ethers.providers.ExternalProvider,
      );

      // There is a login issue with metamask: https://github.com/MetaMask/metamask-extension/issues/10085

      // Triggers metamask login window, but always asks for permissions to allow site to use wallet. However, it handles
      // the user closing the login modal correctly (cancels login request so modal pops up next time).
      // await provider.send("wallet_requestPermissions", [{ eth_accounts: {} }]);

      // Triggers login modal, but if the user closes the login modal, the request isnt cancelled, so the modal
      // does not pop up again the next time they choose login with metamask (unless they refresh the page).
      await provider.send('eth_requestAccounts', []);

      return provider;
    } catch (e) {
      return undefined; // Assume user cancelled
    }
  }
  throw new Error('Metamask not installed');
};

/**
 * Returns an ethers Web3Provider, which wraps the WalletConnect instance
 */
export const getWalletProviderWalletConnect = async () => {
  window.localStorage.removeItem('walletconnect');
  let provider;

  // Try to init WalletConnect - could fail if INFURA_ID is incorrect
  try {
    provider = new WalletConnectProvider({
      infuraId: process.env.REACT_APP_WALLETCONNECT_INFURA_ID,
    });
  } catch (e) {
    throw new Error('WalletConnect not available');
  }

  // Now try and get the user to log into their wallet
  try {
    await provider.connect(); //  Enable session (triggers QR Code modal)
  } catch (e) {
    return undefined; // assume user cancelled login
  }

  if (provider) {
    return new ethers.providers.Web3Provider(provider as ethers.providers.ExternalProvider);
  }

  return undefined;
};

/**
 * Makes a request to TRM to get a risk assessment for the given wallet ID
 * @param walletId - ID of the wallet to check
 */
export async function getWalletRiskAssessment(walletId: string) {
  try {
    const result = await fetch('https://api.trmlabs.com/public/v2/screening/addresses', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: 'Basic ' + btoa(process.env.REACT_APP_TRM_API_KEY || ''),
      },
      body: JSON.stringify([
        {
          address: walletId,
          chain: 'ethereum',
        },
      ]),
    });

    if (result.ok) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: WalletRiskAssessment[] = await result.json();
      return data[0];
    } else {
      throw await result.text();
    }
  } catch (e) {
    // eslint-disable-next-line
    console.warn('Wallet screening failed', e);
    throw new Error(unavailableText);
  }
}

/**
 * Returns true or false based upon if the given risk assessment would suggest the wallet is risky
 * @param riskAssessment - Risk report foir a wallet obtained from using walletSecurityCheck
 */
export const isWalletRisky = (riskAssessment?: WalletRiskAssessment) => {
  const indicators = riskAssessment?.addressRiskIndicators;
  const redFlag =
    Array.isArray(indicators) && indicators.find((i) => i.categoryRiskScoreLevel >= 10);
  return Boolean(redFlag);
};

/**
 * Saves a signature via the signatures API for the given wallet address
 * @param walletAddress - the wallet address to save the signature for
 * @param signature - thwe signature to save
 */
const saveSignatureWithTOS = async (
  walletAddress: string,
  signature: string,
  termsOfService: string,
  // referrer?: string,
) => {
  // Build formData object.
  const formData = new FormData();
  formData.append('signature', signature);
  formData.append('walletAddress', walletAddress);
  formData.append('message', termsOfService);
  // formData.append('referrer', referrer || '');

  return await fetch(`https://hackathon-rest-api.herokuapp.com/add-signature`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    body: formData,
  });
};

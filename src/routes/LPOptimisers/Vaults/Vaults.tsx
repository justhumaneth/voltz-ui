import { MellowProduct } from '@voltz-protocol/v1-sdk';
import React, { useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { useWallet } from '../../../hooks/useWallet';
import { setPageTitle } from '../../../utilities/page';
import { routes } from '../../paths';
import { useLPVaults } from '../useLPVaults';
import { VaultsBox } from './Vaults.styled';
import { VaultsTable } from './VaultsTable/VaultsTable';

export const Vaults: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { signer, setRequired } = useWallet();
  const { lpVaults, vaultsInitialised, vaultsInitialisedWithSigner } = useLPVaults(signer);
  const handleSelectMellowLpVault = (selectedVault: MellowProduct) => {
    if (!signer) {
      setRequired(true);
    } else {
      const path = generatePath(routes.LP_OPTIMISERS_DEPOSIT_FORM, {
        actions: 'deposit',
        vaultId: selectedVault.id,
      });
      navigate(`/${path}`);
    }
  };

  useEffect(() => {
    setPageTitle('LP Optimisers');
  }, []);

  return (
    <VaultsBox>
      <VaultsTable
        dataLoading={signer ? !vaultsInitialisedWithSigner : !vaultsInitialised}
        mellowProducts={lpVaults}
        onSelectItem={handleSelectMellowLpVault}
      />
    </VaultsBox>
  );
};

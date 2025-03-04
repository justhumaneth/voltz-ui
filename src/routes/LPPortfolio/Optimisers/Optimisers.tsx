import React, { useState } from 'react';

import { Loading } from '../../../components/atomic/Loading/Loading';
import { Panel } from '../../../components/atomic/Panel/Panel';
import { AutomaticRolloverToggleProps } from '../../../components/interface/AutomaticRolloverToggle/AutomaticRolloverToggle';
import { useWallet } from '../../../hooks/useWallet';
import { useLPVaults } from '../../LPOptimisers/useLPVaults';
import { routes } from '../../paths';
import { NoPositionsOrVaultsFound } from '../NoPositionsOrVaultsFound/NoPositionsOrVaultsFound';
import { Header } from './Header/Header';
import { LPOptimisersTypography, OptimisersBox } from './Optimisers.styled';
import { VaultListItem } from './VaultListItem/VaultListItem';

export const Optimisers: React.FunctionComponent = () => {
  const { signer } = useWallet();
  const { lpVaults, vaultsInitialised, vaultsInitialisedWithSigner } = useLPVaults(signer);
  // todo: read the value from SDK
  const [automaticRolloverState, setAutomaticRolloverState] = useState<'active' | 'inactive'>(
    'inactive',
  );
  if (!signer || !vaultsInitialised || !vaultsInitialisedWithSigner) {
    return (
      <OptimisersBox>
        <Panel sx={{ width: '100%' }} variant="grey-dashed">
          <Loading />
        </Panel>
      </OptimisersBox>
    );
  }

  const vaultsWithDeposit = lpVaults.filter((vault) => vault.userDeposit > 0);

  if (vaultsWithDeposit.length === 0) {
    return (
      <OptimisersBox>
        <NoPositionsOrVaultsFound
          description="Open your first position here:"
          navigateTo={`/${routes.LP_OPTIMISERS}`}
          navigateToText="LP OPTIMISERS"
          title="You haven’t provided liquidity to any Optimiser yet."
        />
      </OptimisersBox>
    );
  }
  const automaticRolloverChangePromise = async (
    vaultId: string,
    value: AutomaticRolloverToggleProps['automaticRolloverState'],
  ) => {
    try {
      // todo: SDK integration here
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAutomaticRolloverState(value);
    } catch (err) {
      throw new Error('Error');
    }
  };

  return (
    <OptimisersBox>
      <LPOptimisersTypography>LP OPTIMISERS</LPOptimisersTypography>
      <Header />
      {vaultsWithDeposit.map((vault) => (
        <VaultListItem
          key={vault.id}
          automaticRolloverState={automaticRolloverState}
          depositable={vault.depositable}
          id={vault.id}
          token={vault.metadata.token}
          totalBalance={vault.userDeposit}
          vaults={vault.metadata.vaults.map((vVaults, vaultIndex) => ({
            maturityTimestampMS: vVaults.maturityTimestampMS,
            isCompleted: vault.withdrawable(vaultIndex),
            poolsCount: vVaults.pools.length,
            currentBalance: vault.userIndividualDeposits[vaultIndex],
            distribution: vVaults.weight,
          }))}
          onChangeAutomaticRolloverStatePromise={automaticRolloverChangePromise}
        />
      ))}
    </OptimisersBox>
  );
};

import React, { useEffect, useState } from 'react';

import { MellowProduct } from '../../../../store/features/ecosystem/getMellowLPVaults/config';
import { DepositForm, DepositFormProps } from '../DepositForm/DepositForm';
import { DepositStates, getSubmissionState } from './mappers';

const automaticWeights: DepositFormProps['weights'] = [
  {
    distribution: 90,
    maturityTimestamp: 1680220800000,
    pools: ['sETH', 'rETH'],
  },
  {
    distribution: 10,
    maturityTimestamp: 1672444800000,
    pools: ['sETH', 'rETH', 'sETH'],
  },
];

export type ConnectedMellowLpDepositFormProps = {
  vault: MellowProduct;
  onCancel: () => void;
  loading: boolean;
};

export const ConnectedDepositForm: React.FunctionComponent<ConnectedMellowLpDepositFormProps> = ({
  loading,
  vault,
  onCancel,
}) => {
  const [selectedDeposit, setSelectedDeposit] = useState<number>(0);
  const [distribution, setDistribution] = useState<'automatic' | 'manual'>('automatic');
  const [manualWeights, setManualWeights] = useState<DepositFormProps['weights']>(
    automaticWeights.map((a) => ({ ...a })),
  );
  const [depositState, setDepositState] = useState<DepositStates>(DepositStates.INITIALISING);
  const [error, setError] = useState<string>('');

  const sufficientFunds = (vault.vault.userWalletBalance ?? 0) >= selectedDeposit;

  const deposit = () => {
    if (selectedDeposit > 0) {
      setDepositState(DepositStates.DEPOSITING);
      void vault.vault.deposit(selectedDeposit).then(
        () => {
          setDepositState(DepositStates.DEPOSIT_DONE);
        },
        (err: Error) => {
          setError(`Deposit failed. ${err.message ?? ''}`);
          setDepositState(DepositStates.DEPOSIT_FAILED);
        },
      );
    } else {
      setError('Please input amount');
      setDepositState(DepositStates.DEPOSIT_FAILED);
    }
  };

  const approve = () => {
    setDepositState(DepositStates.APPROVING);
    void vault.vault.approveToken().then(
      () => {
        setDepositState(DepositStates.APPROVED);
      },
      (err: Error) => {
        setError(`Approval failed. ${err.message ?? ''}`);
        setDepositState(DepositStates.APPROVE_FAILED);
      },
    );
  };

  useEffect(() => {
    if (loading || !vault?.id) {
      return;
    }

    void vault.vault.isTokenApproved().then(
      (resp) => {
        if (resp) {
          setDepositState(DepositStates.APPROVED);
        } else {
          setDepositState(DepositStates.APPROVE_REQUIRED);
        }
      },
      (err: Error) => {
        setError(`Error occurred while retrieving information. ${err.message ?? ''}`);
        setDepositState(DepositStates.PROVIDER_ERROR);
      },
    );
  }, [vault.id, loading]);

  const submissionState = getSubmissionState({
    depositState,
    deposit,
    approve,
    selectedDeposit,
    sufficientFunds,
    error,
    tokenName: vault.metadata.token,
    loading,
  });

  const onChangeDeposit = (value: number | undefined): void => {
    setSelectedDeposit(value ?? 0);
  };

  const weights = distribution === 'automatic' ? automaticWeights : manualWeights;
  const combinedWeightValue = weights.reduce((total, weight) => total + weight.distribution, 0);

  return (
    <DepositForm
      combinedWeightValue={combinedWeightValue}
      disabled={
        !sufficientFunds || submissionState.disabled || loading || combinedWeightValue !== 100
      }
      distribution={distribution}
      hintText={submissionState.hintText}
      loading={submissionState.loading}
      lpVault={vault}
      submitText={submissionState.submitText}
      success={submissionState.success}
      weights={weights}
      onCancel={onCancel}
      onChangeDeposit={onChangeDeposit}
      onDistributionToggle={setDistribution}
      onManualDistributionsUpdate={setManualWeights}
      onSubmit={submissionState.action}
    />
  );
};
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@routes';
import { actions, selectors } from '@store';
import { useAgent, useDispatch, useSelector } from '@hooks';
import { MintBurnFormActions, MintBurnFormModes, useMintBurnForm } from '@components/contexts';
import { MintBurnForm, PendingTransaction } from '@components/interface';
import { updateFixedRate } from './utilities';

export type ConnectedMintBurnFormProps = {
  onReset: () => void;
};

const ConnectedMintBurnForm: React.FunctionComponent<ConnectedMintBurnFormProps> = ({ onReset }) => {
  const { agent } = useAgent();
  const dispatch = useDispatch();
  const form = useMintBurnForm();
  const navigate = useNavigate();

  const [transactionId, setTransactionId] = useState<string | undefined>();
  const activeTransaction = useSelector(selectors.transactionSelector)(transactionId);

  const getSubmitReduxAction = () => {
    const transaction = { 
      ammId: form.amm.id, 
      agent,
      fixedLow: form.state.fixedLow,
      fixedHigh: form.state.fixedHigh,
      margin: Math.abs(form.state.margin as number) * (form.isRemovingMargin ? -1 : 1),
      notional: Math.abs(form.state.notional as number) * (form.isRemovingLiquidity ? -1 : 1),
    };
  
    switch(form.action) {
      case MintBurnFormActions.UPDATE:
        return actions.updatePositionMarginAction(form.amm, transaction);
      case MintBurnFormActions.MINT:
        return actions.mintAction(form.amm, transaction);
      case MintBurnFormActions.BURN:
        return actions.burnAction(form.amm, transaction);
    }
  }

  const handleComplete = () => {
    onReset();
    navigate(`/${routes.LP_FARM}`);
  };

  const handleGoBack = () => {
    const action = actions.closeTransaction(transactionId as string);
    dispatch(action);
  }

  const handleSetFixedHigh = useCallback(
    updateFixedRate({ amm: form.amm, fixedRate: form.state.fixedHigh, setFixedRate: form.setFixedHigh }),
    [form.amm, form.state.fixedHigh, form.setFixedHigh],
  );

  const handleSetFixedLow = useCallback(
    updateFixedRate({ amm: form.amm, fixedRate: form.state.fixedLow, setFixedRate: form.setFixedLow }),
    [form.amm, form.state.fixedLow, form.setFixedLow],
  );

  const handleSubmit = () => {
    if (!form.isValid) return;

    if(!form.isRemovingLiquidity && !form.isRemovingMargin) {
      if(!form.tokenApprovals.underlyingTokenApprovedForPeriphery) {
        form.tokenApprovals.approveUnderlyingTokenForPeriphery();
        return;
      }
    }

    const reduxAction = getSubmitReduxAction();
    if(reduxAction) {
      setTransactionId(reduxAction.payload.transaction.id);
      dispatch(reduxAction);
    }
  };

  if (!form.amm) {
    return null;
  }

  if (activeTransaction) {
    return (
      <PendingTransaction 
        amm={form.amm} 
        isEditingMargin={form.mode === MintBurnFormModes.EDIT_MARGIN} 
        liquidityAction={form.state.liquidityAction} 
        transactionId={transactionId} 
        onComplete={handleComplete}
        notional={form.state.notional}
        margin={Math.abs(form.state.margin as number) * (form.isRemovingMargin ? -1 : 1) }
        onBack={handleGoBack} 
      />
    );
  }

  return (
    <MintBurnForm
      balance={form.balance ? form.amm.descale(form.balance) : undefined}
      endDate={form.amm.endDateTime}
      formState={form.state}
      errors={form.errors}
      mode={form.mode}
      isFormValid={form.isValid && !form.minRequiredMargin.errorMessage}
      minRequiredMargin={form.minRequiredMargin.result}
      minRequiredMarginLoading={form.minRequiredMargin.loading}
      onCancel={onReset}
      onChangeFixedLow={handleSetFixedLow}
      onChangeFixedHigh={handleSetFixedHigh}
      onChangeLiquidityAction={form.setLiquidityAction}
      onChangeMargin={form.setMargin}
      onChangeMarginAction={form.setMarginAction} 
      onChangeNotional={form.setNotional}
      onSubmit={handleSubmit}
      protocol={form.amm.protocol}
      startDate={form.amm.startDateTime}
      submitButtonHint={form.submitButtonHint}
      submitButtonText={form.submitButtonText}
      tokenApprovals={form.tokenApprovals}
      underlyingTokenName={form.amm.underlyingToken.name}
    />
  );
};

export default ConnectedMintBurnForm;

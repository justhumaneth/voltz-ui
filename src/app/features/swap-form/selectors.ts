import { RootState } from '../../store';

// ------------ Prospective Swap ------------
export const selectNotionalAmount = (state: RootState) =>
  state.swapForm.prospectiveSwap.notionalAmount;

// ------------ Cashflow Calculator Selectors ------------
export const selectCashflowCalculatorInitialised = (state: RootState) =>
  state.swapForm.cashflowCalculator.initialised;
export const selectCashflowCalculatorErrorState = (state: RootState) =>
  state.swapForm.cashflowCalculator.error;
export const selectPredictedApy = (state: RootState) =>
  state.swapForm.cashflowCalculator.predictedApy;
export const selectAdditionalCashflow = (state: RootState) =>
  state.swapForm.cashflowCalculator.additionalCashflow;
export const selectTotalCashflow = (state: RootState) =>
  state.swapForm.cashflowCalculator.totalCashflow;

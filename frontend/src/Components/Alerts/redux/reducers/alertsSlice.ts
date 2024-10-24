import { createSlice } from '@reduxjs/toolkit';
import ALERTS_ACTION_TYPES from '../../../../constants/actionTypes/alerts';
import { AlertUi } from '../../models/ui';
import { modifyAlert } from '../../utils/modifyAlert';

const { NAME } = ALERTS_ACTION_TYPES;

type AlertsState = {
  alerts: AlertUi[];
};

const initialState: AlertsState = {
  alerts: [],
};

export const alertsSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setAlerts: (state, { payload }) => {
      state.alerts = modifyAlert(state.alerts, payload);
    },
    resetAlerts: (state, { payload }) => {
      if (payload) state.alerts = state.alerts.filter(({ id }) => id !== payload);
      else state.alerts = [];
    },
  },
});

export type { AlertsState };
export const { setAlerts, resetAlerts } = alertsSlice.actions;
export default alertsSlice.reducer;

import { RootState } from '../../../../redux/store';

const root = (state: RootState) => state.alertsReducer;

const getAlerts = (state: RootState) => root(state).alerts;

export { getAlerts };

import { combineReducers } from "@reduxjs/toolkit";

import progressReducer from "../Components/Progress/redux/reducers/progressSlice";
import alertsReducer from "../Components/Alerts/redux/reducers/alertsSlice";

const rootReducer = combineReducers({
  progressReducer,
  alertsReducer,
});

export default rootReducer;

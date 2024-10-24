import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PROGRESS_ACTION_TYPES from '../../../../constants/actionTypes/progress';
import { ProgressNames } from '../../../../constants/progressNames';

const { COMMON } = ProgressNames;
const { NAME } = PROGRESS_ACTION_TYPES;

export interface ProgressState {
  progresses: { [key in ProgressNames]?: boolean };
}

const initialState: ProgressState = { progresses: { [COMMON]: false } };

export const progressSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    setProgress: (state, { payload = COMMON }: PayloadAction<ProgressNames | undefined>) => {
      state.progresses = { [payload]: true };
    },

    removeProgress: (state, { payload = COMMON }: PayloadAction<ProgressNames | undefined>) => {
      state.progresses[payload] = false;
    },
  },
});

export const { setProgress, removeProgress } = progressSlice.actions;
export default progressSlice.reducer;

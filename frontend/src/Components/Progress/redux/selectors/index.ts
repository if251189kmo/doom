import { createSelector } from '@reduxjs/toolkit';
import { ProgressNames } from '../../../../constants/progressNames';
import { RootState } from '../../../../redux/store';

const { COMMON } = ProgressNames;

const root = (state: RootState) => state.progressReducer;
const getProgress = (name: ProgressNames = COMMON) =>
  createSelector([root], ({ progresses }) => progresses[name] || false);

export { getProgress };

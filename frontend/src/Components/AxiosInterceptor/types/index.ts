import { AsyncThunkConfig, GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { FormikValues } from 'formik';
import { AppDispatch, RootState } from '../../../redux/store';
import { TableState } from '../../Table/redux/reducers/tableSlice';

type ThunkConfig = { pagination?: boolean };
type Thunk = {
  pagination: TableState['pagination'];
  filter: TableState['filter'];
  dispatch: AppDispatch;
  getState: () => RootState;
};

type Payload = FormikValues | undefined;
type HandlePayload = {
  payload?: Payload;
  asyncCallback: Function;
  thunk: GetThunkAPI<AsyncThunkConfig>;
  config?: ThunkConfig;
};

export type { Thunk, HandlePayload, ThunkConfig, Payload };

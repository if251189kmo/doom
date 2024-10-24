import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { RootState } from '../../../redux/store';
import { removeProgress, setProgress } from '../../Progress/redux/reducers/progressSlice';
import { setTPagination } from '../../Table/redux/reducers/tableSlice';
import { Thunk, Payload, ThunkConfig } from '../types'; // HandlePayload
import { axiosErrorHandler } from './axiosErrorHandler';
import { instanceToken } from './instance';

const fetchData = (url: string) => instanceToken.get(url);

const thunkWrapper = (type: string, asyncCallback: Function, config?: ThunkConfig) =>
  createAsyncThunk(type, async (payload: Payload, thunk) => {
    const { dispatch, getState } = thunk;
    const { pagination, filter } = (getState() as RootState).tableReducer;

    try {
      dispatch(setProgress());
      let res;
      if (payload) res = await asyncCallback(payload, { ...thunk, pagination, filter });
      else res = await asyncCallback({ ...thunk, pagination, filter });

      if (config?.pagination) {
        const { page, total, size } = res;

        dispatch(
          setTPagination({
            page: pagination.page,
            rowsPerPage: size,
            totalElements: total,
            totalPages: page,
          }),
        );
      }
    } catch (error) {
      axiosErrorHandler(dispatch, error as AxiosError);
    } finally {
      dispatch(removeProgress());
    }
  });

export type { Thunk };
export { thunkWrapper, fetchData };

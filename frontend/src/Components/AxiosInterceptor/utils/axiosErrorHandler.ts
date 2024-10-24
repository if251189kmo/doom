import { AxiosError, AxiosResponse } from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { logoutUser } from '../../../Pages/Login/redux/reducers/authSlice';
import { setAlerts } from '../../Alerts/redux/reducers/alertsSlice';
import { AlertNames } from '../../../constants/alertNames';
import { createErrorAlert } from '../../Alerts/utils';

const { ERROR, WARNING, INFO, SUCCESS } = AlertNames;

const axiosErrorHandler = (dispatch: Dispatch, error: AxiosError) => {
  const { response: res } = error;
  const { status, data } = res as AxiosResponse;
  const blob = data instanceof Blob;

  const isBlob = res && blob;
  const isInfo = res && !blob && status >= 100 && status < 200;
  const isSuccess = res && !blob && status >= 200 && status < 300;
  const isWarning = res && !blob && status >= 300 && status < 400;
  const isError = res && !blob && status >= 400 && status !== 401 && status <= 505;
  const isUnauthorized = res && !blob && status === 401;

  if (isBlob) dispatch(setAlerts(createErrorAlert(`isBlob: ${isBlob}`)));
  if (isSuccess) dispatch(setAlerts({ type: SUCCESS, status, data }));
  if (isInfo) dispatch(setAlerts({ type: INFO, status, data }));
  if (isWarning) dispatch(setAlerts({ type: WARNING, status, data }));
  if (isError) dispatch(setAlerts({ type: ERROR, status, data }));
  if (isUnauthorized) dispatch(logoutUser());
};

export { axiosErrorHandler };

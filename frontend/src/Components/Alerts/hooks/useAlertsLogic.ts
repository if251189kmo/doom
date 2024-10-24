import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { AlertProps } from '../Common/Alert';
import { resetAlerts } from '../redux/reducers/alertsSlice';
import { getAlerts } from '../redux/selectors';

export const useAlertsLogic = () => {
  const dispatch = useAppDispatch();
  const alerts = useAppSelector(getAlerts);
  const { pathname } = useLocation();
  const [prevLocation, setPrevLocation] = useState(pathname);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const arrLength = alerts.length;
    const isChangePage = prevLocation !== pathname;
    setPrevLocation(pathname);

    if (arrLength > 0 && isChangePage) dispatch(resetAlerts(undefined));
    if (arrLength > 0 && !isChangePage) {
      timer = setTimeout(() => dispatch(resetAlerts(alerts[arrLength - 1].id)), 2000);
    }
    return () => clearTimeout(timer);
  }, [alerts, dispatch, pathname, prevLocation]);

  const onClose: AlertProps['onClose'] = (id) => dispatch(resetAlerts(id));

  return { alerts, onClose };
};

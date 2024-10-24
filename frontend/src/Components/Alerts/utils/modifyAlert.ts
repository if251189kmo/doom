import { AlertUi } from '../models/ui';
import { ModifyAlert } from '../types';

const generateUniqueAlertId = (alerts: AlertUi[]) => {
  let randomId = Math.floor(Math.random() * 100);

  while (alerts.map(({ id }) => id).includes(randomId)) {
    randomId = Math.floor(Math.random() * 100);
  }

  return randomId;
};

const modifyAlert: ModifyAlert = (alerts, { type, status: code, data }) => {
  alerts.push({
    id: generateUniqueAlertId(alerts),
    type,
    code,
    message: Array.isArray(data.messages) ? data.messages[0] : data.message,
  });

  return alerts;
};

export { modifyAlert };

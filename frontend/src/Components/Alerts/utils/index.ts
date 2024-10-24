import CloseIcon from '@mui/icons-material/Close';
import { ButtonTypes } from '../../../constants/buttonTypes';
import { AlertProps } from '../types';
import { AlertNames } from '../../../constants/alertNames';

const { ICON } = ButtonTypes;
const { SUCCESS, INFO, WARNING, ERROR } = AlertNames;

const createSuccessAlert = (message: string) => ({ type: SUCCESS, data: { message } });
const createWarningAlert = (message: string) => ({ type: WARNING, data: { message } });
const createInfoAlert = (message: string) => ({ type: INFO, data: { message } });
const createErrorAlert = (message: string) => ({ type: ERROR, data: { message } });

const onCloseButton = (id: AlertProps['id'], onClose: AlertProps['onClose']) => [
  {
    buttontype: ICON,
    icon: CloseIcon,
    onClick: onClose.bind(null, id),
  },
];

export { onCloseButton, createSuccessAlert, createWarningAlert, createInfoAlert, createErrorAlert };

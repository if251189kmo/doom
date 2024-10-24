// libraries
import { Alert as MuiAlert, AlertTitle } from '@mui/material';

// components
import RenderButtons from '../../Buttons/RenderButtons';

// logic
import { onCloseButton } from '../utils';

// types
import { AlertProps } from '../types';

// styles
import styles from '../styles.module.scss';

function Alert(props: AlertProps) {
  const { id, code, classes = styles.alert, type, message, onClose } = props;

  return (
    <MuiAlert
      className={classes}
      severity={type}
      action={<RenderButtons buttons={onCloseButton(id, onClose)} />}
    >
      <AlertTitle>
        <strong>{`${type} : ${code}`}</strong>
      </AlertTitle>
      {message}
    </MuiAlert>
  );
}

export type { AlertProps };
export default Alert;

// components
import Alert from './Common/Alert';

// logic
import { useAlertsLogic } from './hooks/useAlertsLogic';

// styles
import styles from './styles.module.scss';

export type AlertsProps = { children: JSX.Element };

function Alerts(props: AlertsProps) {
  const { children } = props;
  const { alerts, onClose } = useAlertsLogic();

  if (alerts) {
    return (
      <div className={styles.alerts}>
        <div className={styles.box}>
          {alerts.map((alert, i) => (
            <Alert key={+i} {...alert} onClose={onClose} />
          ))}
        </div>
        {children}
      </div>
    );
  }

  return children;
}

export default Alerts;

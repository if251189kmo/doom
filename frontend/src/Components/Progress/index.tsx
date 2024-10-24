// logic
import { useProgressLogic } from './hooks/useProgressLogic';

// components
import CircularProgress from '../CircularProgress';

// types
import { ProgressProps } from './types';

// logic
import { getLoadingLabel } from './utils';

// styles
import styles from './styles.module.scss';

function Progress(props: ProgressProps) {
  const { loading, size = 50, children, ...rest } = props;
  const { isLoading } = useProgressLogic(loading);

  return (
    <div className={styles.progress}>
      {isLoading ? (
        <div id="indecator" className={styles.container}>
          <CircularProgress size={size} {...rest} /> <span>{getLoadingLabel()}</span>
        </div>
      ) : null}
      {children}
    </div>
  );
}
export default Progress;

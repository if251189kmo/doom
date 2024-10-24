import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';

type CircularProgressProps = MuiCircularProgressProps;

function CircularProgress(props: CircularProgressProps) {
  const { size = 25, ...rest } = props;

  return <MuiCircularProgress size={size} {...rest} />;
}

export type { CircularProgressProps };
export default CircularProgress;

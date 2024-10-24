import { AlertServer } from '../models/server';
import { AlertUi } from '../models/ui';

type AlertProps = {
  classes?: string;
  onClose: (id: number) => void;
} & AlertUi;

type ModifyAlert = (
  alerts: AlertUi[],
  res: { status: AlertServer['status']; data: AlertServer['data']; type: AlertUi['type'] },
) => AlertUi[];

export type { AlertProps, ModifyAlert };

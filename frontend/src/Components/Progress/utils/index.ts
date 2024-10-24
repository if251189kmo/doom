import { findValueByKey } from '../../../utils/helpers/findValueByKey';
import loadingLabel from '../json/index.json';

const getLoadingLabel = () => findValueByKey(loadingLabel, 'label');

export { getLoadingLabel };

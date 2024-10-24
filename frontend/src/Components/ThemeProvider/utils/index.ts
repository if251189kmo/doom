import { createTheme } from '@mui/material/styles';
import { mergeDeepRight } from 'ramda';
import defaultTheme from '../../../styles/theme/default';

const createCustomTheme = (theme = {}) => createTheme(mergeDeepRight(defaultTheme, theme));

export { createCustomTheme };

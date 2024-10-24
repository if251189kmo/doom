import { ThemeProvider as MuiThemeWrapper, ThemeOptions } from '@mui/material/styles';
import { createCustomTheme } from './utils';

type ThemeProviderProps = { children: JSX.Element; customTheme?: ThemeOptions };

function ThemeProvider(props: ThemeProviderProps) {
  const { customTheme, children } = props;

  return <MuiThemeWrapper theme={createCustomTheme(customTheme)}>{children}</MuiThemeWrapper>;
}

export type { ThemeProviderProps };
export default ThemeProvider;

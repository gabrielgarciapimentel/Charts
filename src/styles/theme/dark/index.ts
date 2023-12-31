import {Theme, theme} from '..';
import {palette} from '../palette';

export const dark: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    mainForeground: palette.white,

    secondaryCardBackground: palette.dark,
    secondaryCardText: palette.white,

    primaryLineColor: palette.darkPrimary,
  },
};

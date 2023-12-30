import {Appearance} from 'react-native';
import {ColorScheme} from '../../types';

export const defaultColorScheme: ColorScheme = {
  statusBarStyle:
    (Appearance.getColorScheme() ?? 'light') === 'light' ? 'dark' : 'light',
  colorScheme: Appearance.getColorScheme() ?? 'light',
  overlay1: null,
  overlay2: null,
  active: false,
};

export const colorSchemeReducer = (
  _: ColorScheme,
  colorScheme: ColorScheme,
) => {
  return colorScheme;
};

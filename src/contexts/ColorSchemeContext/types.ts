import {RefObject} from 'react';
import {ColorScheme} from '../../types';
import {View} from 'react-native';
import {SharedValue} from 'react-native-reanimated';

export interface ColorSchemeContextProps extends ColorScheme {
  dispatch: (scheme: ColorScheme) => void;
  ref: RefObject<View>;
  transition: SharedValue<number>;
  circle: SharedValue<{x: number; y: number; r: number}>;
}

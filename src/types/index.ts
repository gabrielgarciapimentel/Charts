import {SkImage} from '@shopify/react-native-skia';

export interface ColorScheme {
  statusBarStyle: ColorSchemeName;
  colorScheme: ColorSchemeName;
  overlay1: SkImage | null;
  overlay2: SkImage | null;
  active: boolean;
}

export type ColorSchemeName = 'light' | 'dark';

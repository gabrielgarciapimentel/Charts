import {createContext} from 'react';
import type {ColorSchemeContextProps} from './types';

export const ColorSchemeContext = createContext<ColorSchemeContextProps | null>(
  null,
);

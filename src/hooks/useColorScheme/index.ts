import {dist, makeImageFromView, vec} from '@shopify/react-native-skia';
import {useCallback, useContext} from 'react';
import {withTiming} from 'react-native-reanimated';
import {wait} from '../../functions/wait';
import {Dimensions} from 'react-native';
import {ColorSchemeContext} from '../../contexts/ColorSchemeContext';

const {width, height} = Dimensions.get('window');
const corners = [vec(0, 0), vec(width, 0), vec(width, height), vec(0, height)];

export const useColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);
  if (ctx === null) {
    throw new Error('No ColorScheme context found');
  }
  const {colorScheme, dispatch, circle, transition, ref, active} = ctx;
  const toggle = useCallback(
    async (_x: number, _y: number) => {
      const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
      dispatch({
        active: true,
        colorScheme,
        overlay1: null,
        overlay2: null,
        statusBarStyle: newColorScheme,
      });
      circle.value = {
        x: _x,
        y: _y,
        r: Math.max(...corners.map(c => dist(c, vec(_x, _y)))),
      };
      const overlay1 = await makeImageFromView(ref);
      dispatch({
        active: true,
        colorScheme: newColorScheme,
        overlay1,
        overlay2: null,
        statusBarStyle: newColorScheme,
      });
      await wait(20);
      const overlay2 = await makeImageFromView(ref);
      dispatch({
        active: true,
        colorScheme: newColorScheme,
        overlay1,
        overlay2,
        statusBarStyle: newColorScheme,
      });
      const duration = 650;
      transition.value = 0;
      transition.value = withTiming(1, {duration});

      await wait(duration);
      dispatch({
        active: false,
        colorScheme: newColorScheme,
        overlay1: null,
        overlay2: null,
        statusBarStyle: colorScheme,
      });
    },
    [circle, colorScheme, dispatch, ref, transition],
  );
  return {colorScheme, toggle, active};
};

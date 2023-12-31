import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {useColorScheme} from '../../hooks/useColorScheme';

export const ColorSchemeButton = () => {
  const {toggle, colorScheme, active} = useColorScheme();
  const pan = Gesture.Pan()
    .runOnJS(true)
    .onBegin(e => {
      if (!active) {
        toggle(e.absoluteX, e.absoluteY);
      }
    });

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={pan}>
        <>
          {colorScheme === 'light' && <Icon name="moon" />}
          {colorScheme === 'dark' && <Icon name="sun" color={'#FFF'} />}
        </>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

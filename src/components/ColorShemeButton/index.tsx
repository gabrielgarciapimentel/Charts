import React from 'react';
import {Text} from '../../styles/theme';
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
          {colorScheme === 'light' && (
            <Text color="primaryCardBackground">lua</Text>
          )}
          {colorScheme === 'dark' && (
            <Text color="primaryCardBackground">sol</Text>
          )}
        </>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

/* eslint-disable react-native/no-inline-styles */
import {
  Canvas,
  Circle,
  Image,
  ImageShader,
  mix,
} from '@shopify/react-native-skia';
import React, {useReducer, useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {useDerivedValue, useSharedValue} from 'react-native-reanimated';
import {ColorSchemeContext} from '../../contexts/ColorSchemeContext';
import {ColorSchemeProviderProps} from './types';
import {
  colorSchemeReducer,
  defaultColorScheme,
} from '../../states/colorSchemeReducer';

const {width, height} = Dimensions.get('window');

export const ColorSchemeProvider = ({children}: ColorSchemeProviderProps) => {
  const transition = useSharedValue(0);
  const circle = useSharedValue({x: 0, y: 0, r: 0});
  const ref = useRef(null);
  const [{colorScheme, overlay1, overlay2, active, statusBarStyle}, dispatch] =
    useReducer(colorSchemeReducer, defaultColorScheme);
  const r = useDerivedValue(() => mix(transition.value, 0, circle.value.r));
  return (
    <View style={{flex: 1}}>
      {/* <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} /> */}
      <View style={{flex: 1}} ref={ref}>
        <ColorSchemeContext.Provider
          value={{
            colorScheme,
            dispatch,
            ref,
            overlay1,
            overlay2,
            transition,
            circle,
            active,
            statusBarStyle,
          }}>
          {children}
        </ColorSchemeContext.Provider>
      </View>
      <Canvas style={StyleSheet.absoluteFill} pointerEvents="none">
        <Image image={overlay1} height={height} width={width} />
        {overlay2 && (
          <Circle c={circle} r={r}>
            <ImageShader
              image={overlay2}
              x={0}
              y={0}
              width={width}
              height={height}
              fit="cover"
            />
          </Circle>
        )}
      </Canvas>
    </View>
  );
};

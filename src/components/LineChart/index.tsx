import React, {useMemo} from 'react';

import {Box, Text, useTheme} from '../../styles/theme';
import {
  Canvas,
  Line,
  LinearGradient,
  Path,
  vec,
} from '@shopify/react-native-skia';
import {Dimensions} from 'react-native';
import {makeCurvedChart} from '../../functions/makeCurvedChart';
import {weatherData} from '../../mocks/weatherData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const lines = Array.from(Array(6).keys());

const {width: dimensionsWidth} = Dimensions.get('window');

const width = dimensionsWidth - 70;

const height = 180;

export const LineChart = () => {
  const {colors} = useTheme();
  const graphData = useMemo(() => makeCurvedChart(weatherData), []);

  return (
    <Box
      padding="m"
      paddingBottom="g"
      m="m"
      backgroundColor="secondaryCardBackground"
      style={{
        borderRadius: 20,
      }}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="m">
        <Box flexDirection="row" alignItems="center">
          <Icon name="test-tube" size={20} color={colors.mainForeground} />
          <Text marginLeft="s" fontSize={20} color="mainForeground">
            Temperature
          </Text>
        </Box>
        <Box
          backgroundColor="mainBackground"
          alignItems="center"
          justifyContent="center"
          width={40}
          height={40}
          borderRadius={20}>
          <Icon name="dots-vertical" size={20} color={colors.mainForeground} />
        </Box>
      </Box>
      <Box marginTop="s" marginBottom="g">
        <Text fontWeight="700" fontSize={28} color="mainForeground">
          {weatherData[weatherData.length - 1].temperature}°C
        </Text>
      </Box>
      <Canvas
        style={{
          width: width,
          height: height,
        }}>
        <>
          {lines.map(item => (
            <Line
              key={item}
              p1={vec(0, (height / lines.length) * item + 1)}
              p2={vec(width, (height / lines.length) * item + 1)}
              color={colors.primaryLineColor}
              style="stroke"
              strokeWidth={1}
            />
          ))}
          <Line
            p1={vec(0, height - 1)}
            p2={vec(width, height - 1)}
            color={colors.primaryLineColor}
            style="stroke"
            strokeWidth={1}
          />
        </>
        <Path style="stroke" path={graphData.curve} strokeWidth={5}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(256, 256)}
            colors={['#0685CD', '#4500D8', '#D400BF', '#DA004E']}
          />
        </Path>
      </Canvas>
    </Box>
  );
};

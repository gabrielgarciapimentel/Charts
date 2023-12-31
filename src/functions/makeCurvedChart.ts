import {Dimensions} from 'react-native';
import {Weather} from '../mocks/weatherData';
import {curveBasis, line, scaleLinear, scaleTime} from 'd3';
import {Skia} from '@shopify/react-native-skia';

const {width: dimensionsWidth} = Dimensions.get('window');

const width = dimensionsWidth - 70;

const height = 180;

export const makeCurvedChart = (data: Weather[]) => {
  const max = Math.max(...data.map(val => val.temperature));
  const min = Math.min(...data.map(val => val.temperature));

  const maxDate = Math.max(...data.map(val => val.date.getTime()));
  const minDate = Math.min(...data.map(val => val.date.getTime()));

  const y = scaleLinear().domain([min, max]).range([height, 0]);
  const x = scaleTime()
    .domain([new Date(minDate), new Date(maxDate)])
    .range([0, width]);

  const curvedLine = line<Weather>()
    .x(d => x(new Date(d.date)))
    .y(d => y(d.temperature))
    .curve(curveBasis)(data);

  const skPath = Skia.Path.MakeFromSVGString(curvedLine!);

  return {
    max,
    min,
    curve: skPath!,
  };
};

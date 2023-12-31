import {ThemeProvider as CThemeProvider} from '@shopify/restyle';
import React from 'react';

import {dark} from './src/styles/theme/dark';
import {Box, theme} from './src/styles/theme';
import {ColorSchemeButton} from './src/components/ColorShemeButton';
import {ColorSchemeProvider} from './src/components/ColorSchemeProvider';
import {useColorScheme} from './src/hooks/useColorScheme';
import {LineChart} from './src/components/LineChart';

function ThemeProvider() {
  const {colorScheme} = useColorScheme();

  return (
    <CThemeProvider theme={colorScheme === 'dark' ? dark : theme}>
      <Box backgroundColor="mainBackground" paddingTop="m" flex={1}>
        <Box marginBottom="m" marginLeft="m" marginTop="m">
          <ColorSchemeButton />
        </Box>
        <LineChart />
      </Box>
    </CThemeProvider>
  );
}

export function App(): React.JSX.Element {
  return (
    <ColorSchemeProvider>
      <ThemeProvider />
    </ColorSchemeProvider>
  );
}

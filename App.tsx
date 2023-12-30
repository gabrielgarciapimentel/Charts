import {ThemeProvider as CThemeProvider} from '@shopify/restyle';
import React from 'react';

import {dark} from './src/styles/theme/dark';
import {Box, Text, theme} from './src/styles/theme';
import {ColorSchemeButton} from './src/components/ColorShemeButton';
import {ColorSchemeProvider} from './src/components/ColorSchemeProvider';
import {useColorScheme} from './src/hooks/useColorScheme';

function ThemeProvider() {
  const {colorScheme} = useColorScheme();

  return (
    <CThemeProvider theme={colorScheme === 'dark' ? dark : theme}>
      <Box padding="m" backgroundColor="mainBackground" flex={1}>
        <Box marginBottom="m" marginTop="m">
          <ColorSchemeButton />
        </Box>
        <Box
          backgroundColor="primaryCardBackground"
          margin="s"
          padding="m"
          flexGrow={1}>
          <Text variant="body" color="primaryCardText">
            Primary Card
          </Text>
        </Box>
        <Box
          backgroundColor="secondaryCardBackground"
          margin="s"
          padding="m"
          flexGrow={1}>
          <Text variant="body" color="secondaryCardText">
            Secondary Card
          </Text>
        </Box>
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

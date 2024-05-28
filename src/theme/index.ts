import { ChakraTheme, extendTheme } from '@chakra-ui/react';
import { colors } from '../foundation';
import components from './components';
import globalStyles from './globalStyles';

const theme: Partial<ChakraTheme> = extendTheme({
  styles: globalStyles,
  colors,
  components,
});

export default theme;

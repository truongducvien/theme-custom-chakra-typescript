import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import theme from './theme/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

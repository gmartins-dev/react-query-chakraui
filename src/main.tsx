import { ChakraProvider } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import {
  QueryClientProvider,
  QueryClient,
} from 'react-query';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

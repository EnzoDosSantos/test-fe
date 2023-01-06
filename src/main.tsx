import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, Container } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Container display={"flex"} flexDirection={"column"} overflow={"hidden"} w={"100vw"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <App />
      </Container>
    </ChakraProvider>
  </React.StrictMode>
);

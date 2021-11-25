import React from 'react';
import { ChakraProvider, Container } from "@chakra-ui/react"
import Topbar from './components/Topbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <Topbar />
      <Container maxW="container.lg">
        <Outlet />
      </Container>
  </ChakraProvider>
  );
}


export default App;

import React from 'react';
import './App.css';
import { ChakraProvider, Container } from "@chakra-ui/react"
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Container maxW="container.lg">
        <Outlet />
      </Container>
  </ChakraProvider>
  );
}


export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Projects from '../src/pages/Project';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './assets/global';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

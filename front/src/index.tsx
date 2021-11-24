import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Projects from '../src/pages/Project';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';

ReactDOM.render(
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

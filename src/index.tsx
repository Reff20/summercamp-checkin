import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

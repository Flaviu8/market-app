import React, { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { ColorProvider } from './Context/ColorContext';
import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>
);
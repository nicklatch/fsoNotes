import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CounterContextProvider } from './CounterContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>
);

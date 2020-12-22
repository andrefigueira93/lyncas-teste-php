import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/styles/index.css'
import AppProvider from './hooks';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
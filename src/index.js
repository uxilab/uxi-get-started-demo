import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from 'uxi/Theme/ThemeProvider';
import App from './App';

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

ReactDOM.render(
  <Root />,
  document.querySelector('[reactroot]')
)

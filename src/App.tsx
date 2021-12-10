import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
import { lightTheme } from './style/theme';
import Router from './router';


const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;

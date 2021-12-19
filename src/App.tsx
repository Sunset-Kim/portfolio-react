import React,{useState} from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
import { darkTheme, lightTheme } from './style/theme';
import Router from './router';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';


const App = () => {
  const [isDark, setIsDark] = useState(false);
  
  const onToggleTheme = () => {
    setIsDark(prev => !prev);
  }
  

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router onChangeTheme={onToggleTheme} />
    </ThemeProvider>
  );
}

export default App;

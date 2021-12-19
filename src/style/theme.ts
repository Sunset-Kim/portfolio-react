import { DefaultTheme } from 'styled-components';
import {css} from "styled-components";


export const lightTheme: DefaultTheme = {
  color: {
    primary: "#ff793f",
    text1: "#f7f1e3",
    text2: "#ffffff",
    backgorund: "#222",
    foreground: "#f7f1e3",
  }
}

export const darkTheme: DefaultTheme = {
  color: {
    primary: "#ff793f",
    text1: "#222",
    text2: "#ffffff",
    foreground: "#222",
    backgorund: "#f7f1e3",
  }
}

export const themeTransition = css`
transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
`;
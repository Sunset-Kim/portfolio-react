import { Color, ScreenSize, FontSize, Margin } from './styled.d';
import { CSSProp, DefaultTheme } from 'styled-components';
import {css} from "styled-components";
import { Media } from './styled';

// #1. screen size
const sizes: ScreenSize = {
  mobile: 320,
  tablet: 768,
  desktop: 1024
}

// #2. colors
const lightColor:Color = {
  primary: "#ff793f",
  text1: "#222",
  text2: "#ffffff",
  foreground: "#222",
  background: "#f7f1e3",
}

const darkColor:Color = {
  primary: "#ff793f",
  text1: "#f7f1e3",
  text2: "#ffffff",
  background: "#222",
  foreground: "#f7f1e3",
}

// #3. fontsize
const fontsize: FontSize = {
  14: '14px',
  16: '16px',
  22: '22px',
  24: '24px',
  28: '28px',
  32: '32px',
  36: '36px',
  48: '48px',
}

// #4. margin
const margin: Margin = {
  8: '8px',
  16: '16px',
  24: '24px',
  32: '32px',
  48: '48px',
  60: '60px',
}

type BackQuoteArgs = string[];

const media: Media = {
  mobile: (...args: BackQuoteArgs) => undefined,
  tablet: (...args: BackQuoteArgs) => undefined,
  desktop: (...args: BackQuoteArgs) => undefined,
}

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args: BackQuoteArgs) => 
      css`
      @media only screen and (min-width: ${sizes.desktop}px){
        ${args}
      }
      `;
			break;

    case 'tablet':
    acc.tablet = (...args: BackQuoteArgs) => 
    css`
    @media only screen and (min-width: ${sizes.tablet}px) {
      ${args}
    }`;
    break;

    case 'mobile':
			acc.mobile = (...args: BackQuoteArgs) => css`
      @media only screen and (max-width: ${sizes.mobile}px) {
        ${args}
      }
      `;
			break;

		default:
			break;
	}
  return acc;  
}, media)

export const lightTheme: DefaultTheme = {
  color: lightColor,
  media,
  fontsize,
  margin
}

export const darkTheme: DefaultTheme = {
  color: darkColor,
  media,
  fontsize,
  margin
}

export const themeTransition = css`
transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
`;


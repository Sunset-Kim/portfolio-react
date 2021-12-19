import 'styled-component';

export interface ScreenSize {
  mobile: number
  tablet: number
  desktop: number
}

export interface Color {
  primary: string;
  text1: string;
  text2: string
  background: string;
  foreground: string;
}

export interface Media {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined,
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined,
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined
}

export interface FontSize {
  14: string
  16: string
  22: string
  24: string
  28: string
  32: string
  36: string
  48: string
}

export interface Margin {
  8: string
  16: string
  24: string
  32: string
  48: string
  60: string
}


declare module "styled-components" {
  export interface DefaultTheme {
    color: Color
    media: Media
    fontsize: FontSize
    margin: Margin
  }
}

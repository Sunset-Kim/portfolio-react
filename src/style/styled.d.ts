import 'styled-component';

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      text1: string;
      text2: string
      backgorund: string;
      foreground: string;
    };
  }
}
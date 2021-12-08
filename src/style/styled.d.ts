import 'styled-component';

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      sub: string;
    };
  }
}
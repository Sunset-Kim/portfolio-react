import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { themeTransition } from "./theme";


const GlobalStyle = createGlobalStyle`
${normalize};

* {
  box-sizing: border-box;
  
}

html,body {
  font-family: 'Noto Sans KR', 'Roboto', sans-serif;
  background: ${props => props.theme.color.background};
  color: ${props => props.theme.color.text1};
  height: 100%;
  ${themeTransition}
}

#root {
  height: 100%;
}
`

export default GlobalStyle;
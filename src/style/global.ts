import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize};

* {
  box-sizing: border-box;
}

html,body {
  font-family: 'Noto Sans KR', sans-serif;
  background: ${props => props.theme.color.backgorund};
  color: ${props => props.theme.color.text1};
}
`

export default GlobalStyle;
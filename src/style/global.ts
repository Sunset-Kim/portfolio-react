import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize};

html,body {
  font-family: 'Noto Sans KR', sans-serif;
}
`

export default GlobalStyle;
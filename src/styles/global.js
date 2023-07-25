import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Pretendard", "Noto Sans KR", sans-serif;
  }
  ul, li {
    list-style: none;
  }
  textarea {
    resize: none;
    outline: none;
  }
`;

export default GlobalStyles;

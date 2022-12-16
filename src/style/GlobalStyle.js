import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, * & {
    box-sizing: border-box;
  }
  *:not(input, textarea), * &:not(input, textarea) {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  html {
    font-size: 10px;
    font-style: normal;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    scroll-snap-type: y proximity;
    overflow-y: scroll;
    overflow-x: hidden;
    @media ${({ theme }) => theme.mobile} {
      scroll-snap-type: none;
    }
  }
  h1, h2, h3, h4, h5, h6, ol, li, button {
    cursor: pointer;
  }
`;

export default GlobalStyle;

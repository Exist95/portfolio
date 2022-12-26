import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    font-size: 9px;
    font-style: normal;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    scroll-snap-type: y proximity;
    overflow-x: hidden;
    overflow-y: hidden;
  }

`;

export default GlobalStyle;

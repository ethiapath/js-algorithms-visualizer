import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    /* we want a base font size of 10px and most browsers default to 16px so 62.5% will give us 16px but allows adjust to user custom browser font settings */
    font-size: 62.5%;
  }
  body {
    /* includes padding and border in an element's total width and height */
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: ${props => props.theme.fonts.lato};
    font-weight: 400;
  }

`;

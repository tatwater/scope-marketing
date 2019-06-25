import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';


export const GlobalStyles = createGlobalStyle`
  ${ normalize() };
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    background: #000A20;
    color: #000A20;
    font-family: acumin-pro, sans-serif;
    font-size: 16px;
    line-height: 1.3em;
  }
  body {
    background: #FFF;
  }
  h1 {
    font-size: 38px;
    font-weight: 600;
    letter-spacing: .02em;
    line-height: 1.1em;
    margin: 0 0 32px 0;

    & + p {
      font-size: 18px;
      letter-spacing: .02em;
    }

    @media screen and (min-width: 480px) {
      font-size: 48px;
    }
  }
  h2 {
    font-size: 34px;
    font-weight: 300;
    letter-spacing: .02em;
    line-height: 1.3em;
    margin: 0 0 10px 0;

    span {
      display: inline-block;
    }
  }
  h4 {
    margin-bottom: 14px;
  }
  p {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

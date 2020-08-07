import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background: url("/images/bg.jpg");
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: "Catamaran", sans-serif;
  }
`;

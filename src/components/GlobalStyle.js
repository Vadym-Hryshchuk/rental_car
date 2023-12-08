import { createGlobalStyle } from "styled-components";
// import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
  body {
    color: rgba(18, 20, 23, 0.50);
    font-family: 'Manrope', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }



  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {margin:0;
  padding:0}

  a {
    color: inherit;
    text-decoration: none;
    font-family: inherit;
  }
  button {
    font-family: inherit;
    border: none;
    cursor: pointer;
  }
`;

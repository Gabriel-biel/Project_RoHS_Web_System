import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f5f5f8;
    color: #262626;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
  }

  body, input, button {
    font-family: Quicksand, sans-serif;
    font-size: 16px;
    font-weight: 400;
    border: 0;
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6, strong, span {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  li {
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }
`

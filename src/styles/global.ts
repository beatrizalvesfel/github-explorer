import { createGlobalStyle } from 'styled-components'
import appBackground from "../assets/background.svg";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #3A3A3A;
    font-size: 100%;
    background: #f0f0f5 url(${appBackground}) no-repeat 70% top;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    max-width: 60rem;
    margin: 0 auto;
    padding: 4.5rem 1rem 4.5rem 1rem;
  }

  input {
    color: inherit;
  }

  button,input {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`

export default GlobalStyles

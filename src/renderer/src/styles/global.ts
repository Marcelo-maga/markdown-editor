// HE -> Header
// CO -> Content
// ED -> Editor

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100vh;
    font-family: 'Noto Sans', sans-serif;
    
    display: grid;
    grid-template-areas: 
      "HE"
      "ED";
    
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text}
  }
`

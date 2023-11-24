"use client"

import { createGlobalStyle } from 'styled-components'
import { colors, fontFamilies, medias } from './variables'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  h2, h3 {
    font-weight: 400;
  }

  body {
    background-color: ${colors.white};
    font-family: ${fontFamilies.primary}, sans-serif;
    margin: 0 auto;
    max-width: 1500px;
  }

  a {
    color: ${colors.black};
  }

  ul {
    list-style: none;
  }
  
  p {
    line-height: 1.5;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`

export default GlobalStyles
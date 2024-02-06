"use client"

import { createGlobalStyle } from 'styled-components'
import { colors, fontFamilies, medias } from './variables'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  h1 {
    color: ${colors.dark};
    font-family: ${fontFamilies.secondary}, sans-serif;
    font-size: 24px;

    @media(min-width: ${medias.medium}) {
      font-size: 32px;
    }
  }

  h2, h3 {
    font-weight: 400;
  }

  body {
    background-color: ${colors.alabaster};
    font-family: ${fontFamilies.primary}, sans-serif;
    margin: 0 auto;
    max-width: 1500px;
  }

  main,
  article {
    min-height: 500px;
  }

  a {
    color: ${colors.black};
    background: linear-gradient(to right, ${colors.hover} 50%, transparent 50%);
    background-size: 205% 100%;
    background-position: right bottom;
    font-weight: 500;
    outline: none;

    &:hover {
      background-position: left bottom;
      transition: background 0.25s ease;
    }
  }

  ul {
    list-style: none;
  }
  
  p {
    font-size: 18px;
    line-height: 1.5;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
  }
`

export default GlobalStyles
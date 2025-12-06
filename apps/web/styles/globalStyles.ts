"use client"

import { createGlobalStyle } from 'styled-components'
import { colors, fontFamilies, medias } from './variables'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  .link {
    color: ${colors.black};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 10px;
    padding: 5px 10px;
    position: relative;
    background-image: linear-gradient(${colors.primary}, ${colors.primary});
    background-repeat: no-repeat;
    background-size: 100% 0%;
    background-position: bottom center;
    transition: background-size 0.35s ease;

    &:hover,
    &:focus,
    &:focus-within {
      background-size: 100% 100%;
    }
  }

  h1 {
    color: ${colors.black};
    font-family: ${fontFamilies.secondary}, sans-serif;
    font-size: 22px;
    font-weight: 500;
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

  ul {
    list-style: none;
  }
  
  p {
    font-size: 16px;
    line-height: 1.7;
  }

  .container {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 20px;
  }
`

export default GlobalStyles
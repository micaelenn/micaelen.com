import { createGlobalStyle } from 'styled-components'
import { colors, fontFamilies, medias } from './variables'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyles
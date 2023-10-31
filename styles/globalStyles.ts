import { createGlobalStyle } from 'styled-components'
import { colors, fontFamilies, medias } from './variables'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${fontFamilies.secondary}, sans-serif;
    margin: 0 auto;
    max-width: 1500px;
  }

  a {
    color: ${colors.black};
  }

  ul {
    list-style: none;
  }

  .container {
    margin-left: 20px;
    margin-right: 20px;

    @media(min-width: ${medias.mediumLarge}) {
      margin-left: 30px;
      margin-right: 30px;
    }
  }

  .flex-centralized {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
  }
`

export default GlobalStyles
import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  a {
    background: none;
    color: ${colors.primary};
    font-family: ${fontFamilies.primary};
    font-size: 28px;
    font-weight: 900;
    text-decoration: none;

    @media(min-width: ${medias.medium}) {
      font-size: 32px;
    }
  }

  h1 {
    display: flex;
    align-items: center;

    &::before {
      content: ' ~ ';
      display: block;
      color: ${colors.gray};
      margin: 0 10px;
    }
  }
`

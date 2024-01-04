import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50px;

  @media(min-width: ${medias.extraLarge}) {
    justify-content: end;
    text-align: left;
  }

  li {
    font-size: 16px;

    &:nth-child(1) {
        &:after {
        content: '-';
        margin: 0 10px;
      }
    }

    a {
      font-family: ${fontFamilies.secondary};
    }
  }
`

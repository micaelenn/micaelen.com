import styled from 'styled-components'
import { fontFamilies, medias } from '@/styles/variables'

export const Component = styled.div``

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50px; 

  @media(min-width: ${medias.extraLarge}) {
    justify-content: start;
    text-align: left;
  }
  
  li {
    display: none;
    font-family: ${fontFamilies.secondary};
    font-size: 15px;

    @media(min-width: ${medias.mediumLarge}) {
      max-width: 520px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &.is-visible {
      display: block;
    }
  }
`

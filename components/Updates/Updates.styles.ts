import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.div``

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 70px; 

  @media(min-width: ${medias.extraLarge}) {
    justify-content: start;
    text-align: left;
  }
  
  li {
    display: none;
    font-size: 14px;

    @media(min-width: ${medias.mediumLarge}) {
      max-width: 430px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &.is-visible {
      display: block;
    }
  }
`

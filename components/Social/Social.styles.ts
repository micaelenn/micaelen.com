import styled from 'styled-components'
import { medias } from '@/styles/variables'

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
    font-size: 14px;

    &:nth-child(2) {
      &:before,
      &:after {
        content: '-';
        margin: 0 10px;
      }
    }
    
  }
`

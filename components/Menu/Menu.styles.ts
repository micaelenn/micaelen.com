import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.div`
  background-color: ${colors.alabaster};
  position: fixed;
  width: 100%;
  bottom: 0;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;

  a {
    color: ${colors.black};
    display: block;
    transform: translateY(0); 
    transition: transform 0.3s ease-out; 
    height: 24px;
    width: 24px;

    &:hover, 
    &:focus,
    &:focus-within {
      transform: translateY(-4px);
    }
  } 

  .current {
    .icon {
      background-color: ${colors.primary};
      display: flex;
      padding: 2px;

      &:hover, 
      &:focus,
      &:focus-within {
        transform: translateY(0); 
      } 
    }
  }

  svg {
    height: 24px;
    width: 24px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 25px;
    height: 50px;

    @media(min-width: ${medias.extraLarge}) {
      justify-content: end;
      text-align: left;
    }
  }
`

import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.div`
  max-width: 600px;
  position: relative;

  h2 {
    color: ${colors.primary};
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    transition: all 0.2s ease 0s;
  }

  a {
    position: absolute;
    top: 0;
    height: 100%;
    opacity: 0;
    width: 100%;
  }

  &:hover,
  &:focus {
    h2 {
      color: ${colors.dark};
    }
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    background-color: ${colors.light};
    border-radius: 2px;
    color: ${colors.dark};
    display: inline-block;
    font-family: ${fontFamilies.secondary};
    font-size: 14px;
    padding: 0 5px;
    text-align: center;
  }

  time {
    font-size: 14px;

    @media (min-width: ${medias.medium}) {
      font-size: 16px;
    }
  }
`
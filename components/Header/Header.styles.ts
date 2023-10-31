import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.header`
  border-bottom: 4px solid ${colors.border};

  @media(min-width: ${medias.medium}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 90px;
  }
`

export const Square = styled.div`
  border: 1px solid ${colors.black};
`

export const Title = styled.div`
  border-bottom: 1px solid ${colors.border};
  border-top: 1px solid ${colors.border};
  height: 70px;

  @media(min-width: ${medias.medium}) {
    border: none;
  }

  h1 {
    font-size: 22px;
    font-weight: 400;

    @media(min-width: ${medias.medium}) {
      border: 1px solid ${colors.black};
      font-size: 20px;
      margin: 2px;
      padding: 5px;
      width: 145px;
    }
  }
`

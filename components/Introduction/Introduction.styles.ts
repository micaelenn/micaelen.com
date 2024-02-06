import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.section``

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 40px;

  @media(min-width: ${medias.medium}) {
    flex-direction: row;
    justify-content: space-between;
  }

  p {
    color: ${colors.black};
    margin-bottom: 30px;
  }

  img {
    border-radius: 100%;
    border: 4px solid ${colors.dark};
    height: 250px;
    width: 250px;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;

  @media(min-width: ${medias.medium}) {
    justify-content: start;
  }

  svg {
    fill: ${colors.dark};
  }
`
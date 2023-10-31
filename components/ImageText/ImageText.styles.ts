import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 25px;
  margin-bottom: 25px;

  @media(min-width: ${medias.medium}) {
    flex-direction: row;
  }

  @media(min-width: ${medias.mediumLarge}) {
    gap: 40px;
  }

  p {
    color: ${colors.black};
    font-family: ${fontFamilies.primary};
    font-size: 20px;

    @media(min-width: ${medias.mediumLarge}) {
      font-size: 32px;
    }
  }

  img {
    border-radius: 100%;
    border: 4px solid ${colors.black};
    height: 270px;
    width: 270px;

    @media(min-width: ${medias.mediumLarge}) {
      height: 300px;
      width: 300px;
    }
  }
`

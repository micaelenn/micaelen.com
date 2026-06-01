import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.header`
  margin: 0 auto 40px auto;
  padding: 20px;
  position: relative;
`

export const Center = styled.div`
  border-bottom: 2px solid ${colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 10px;

  @media(min-width: ${medias.landscape}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    height: 35px;
  }

  a {
    text-decoration: none;

    &:hover {
      h1, span {
        color: ${colors.primary};
        transition: 0.2s;
      }
    }
  }

  h1 {
    font-family: ${fontFamilies.primary};
    font-size: 16px;
  }
`

export const ToggleWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 25%;
  transform: translateY(-50%);

  @media(min-width: ${medias.medium}) {
   top: 50%;
  }
`

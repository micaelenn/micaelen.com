import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.header`
  border-bottom: 2px solid ${colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  height: 50px;
  margin: 0 auto 40px auto;
  max-width: 700px;
  padding: 20px;

  @media(min-width: ${medias.landscape}) {
    flex-direction: row;
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


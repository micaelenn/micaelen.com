import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.header`
  border-bottom: 1px solid ${colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 40px;
  padding: 25px;

  @media(min-width: ${medias.medium}) {
    flex-direction: row;
    gap: 20px;
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


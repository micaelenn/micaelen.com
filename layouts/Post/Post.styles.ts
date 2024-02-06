import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Container = styled.article`
  margin-bottom: 80px;
  
  h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  h2 {
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  code {
    background-color: ${colors.white};
    border: 1px solid ${colors.primary};
    border-radius: 4px;
    box-shadow: 4px 4px 4px 0px ${colors.primary};
    display: block;
    margin-bottom: 20px;
    padding: 5px 15px;

    @media(min-width: ${medias.medium}) {
      width: max-content;
    }
  }
`

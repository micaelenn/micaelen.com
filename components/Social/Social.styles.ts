import styled from 'styled-components'
import { colors, medias, fontFamilies } from '@/styles/variables'

export const Component = styled.div`
  img {
    width: 20px;
  }
  
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    height: 20px;

    li {
      font-size: 14px;
      
      a {
        font-family: ${fontFamilies.secondary};
        display: flex;
        align-items: center;
        gap: 5px;
        text-decoration: none;
      }
    }
  }
`

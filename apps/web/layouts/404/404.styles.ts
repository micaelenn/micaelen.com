import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  h2 {
    color: ${colors.black};
    font-size: 32px;
    font-weight: 600;
    text-align: center;
  }

  img {
    filter: grayscale(100%);
  }
`

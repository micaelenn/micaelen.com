import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    color: ${colors.black};
    font-family: ${fontFamilies.primary};
    font-size: 16px;
    font-weight: 500;
  }
`

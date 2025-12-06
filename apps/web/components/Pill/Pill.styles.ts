import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.span`
  font-family: ${fontFamilies.secondary};
  border: 1px solid ${colors.dark};
  font-size: 15px;
  height: 25px;
  display: block;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0 10px;
`

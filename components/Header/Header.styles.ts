import styled from 'styled-components'
import { medias } from '@/styles/variables'

export const Component = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 40px 20px;

  @media(min-width: ${medias.medium}) {
    flex-direction: row;
    gap: 20px;
    padding: 60px 20px;
  }
`


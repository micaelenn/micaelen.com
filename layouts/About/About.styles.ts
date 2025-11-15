import styled from 'styled-components'
import { colors, medias } from '@/styles/variables'

export const Container = styled.main`
  margin-bottom: 100px;

  @media (min-width: ${medias.large}) {
    margin-bottom: 0;
  }

  p {
    font-size: 15px;
    margin-bottom: 30px;
  }
`

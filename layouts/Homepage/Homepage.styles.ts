import styled from 'styled-components'
import { colors, medias } from '@/styles/variables'

export const Container = styled.main`
  margin-bottom: 120px;

  .pilllist {
    margin-top: 60px;
  }

  @media (min-width: ${medias.medium}) {
    margin-bottom: 0;
  }
`

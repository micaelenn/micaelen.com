import styled from 'styled-components'
import { colors, medias } from '@/styles/variables'

export const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 50px;

  @media (min-width: ${medias.landscape}) {
    flex-direction: row;
  }

  img {
    filter: grayscale(100%);
    object-fit: cover;
    width: 120px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  time {
    color: ${colors.dark};
    font-size: 13px;
  }
`


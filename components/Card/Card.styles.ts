import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.div`
  max-width: 600px;
  position: relative;

  h2 {
    color: ${colors.black};
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    transition: all 0.2s ease 0s;
  }

  p {
    color: ${colors.dark};
    font-size: 16px;
    line-height: 1.5;
  }

  a {
    position: absolute;
    top: 0;
    height: 100%;
    opacity: 0;
    width: 100%;
  }

  &:hover,
  &:focus {
    h2, svg {
      color: ${colors.primary};
    }
  }

  time {
    color: ${colors.dark};
    font-size: 14px;
  };
`

export const Title = styled.div`
  display: flex;
  gap: 10px;  

  svg {
    color: ${colors.gray};
    height: 24px;
    width: 24px;
  }
`

export const Topics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
`
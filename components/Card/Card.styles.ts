import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.div`
  max-width: 600px;
  position: relative;

  h2 {
    color: ${colors.black};
    font-size: 18px;
    font-weight: 600;
  }

  p {
    color: ${colors.dark};
    font-size: 16px;
    line-height: 1.5;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    opacity: 0;
    width: 100%;
  }

  &:hover,
  &:focus {
    .title {
      background-size: 100% 100%;
    }
  }

  time {
    color: ${colors.dark};
    font-size: 14px;
  };
`

export const Title = styled.div`
  color: ${colors.black};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 10px;
  position: relative;
  background-image: linear-gradient(${colors.primary}, ${colors.primary});
  background-repeat: no-repeat;
  background-size: 100% 0%;
  background-position: bottom center;
  transition: background-size 0.35s ease;
  margin-bottom: 15px;

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
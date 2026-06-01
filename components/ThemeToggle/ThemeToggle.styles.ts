import styled from 'styled-components'
import { colors } from '@/styles/variables'

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transition: color 0.2s;

  &:hover {
    color: ${colors.primary};
  }
`

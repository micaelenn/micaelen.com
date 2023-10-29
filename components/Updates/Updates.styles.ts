import styled from 'styled-components'

export const Component = styled.div`
  border: 1px solid red;
`

export const List = styled.ul`
  li {
    display: none;

    &.is-visible {
      display: block;
    }
  }
`

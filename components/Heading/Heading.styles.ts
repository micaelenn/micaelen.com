import styled from 'styled-components'
import { colors, medias } from '@/styles/variables'

export const Component = styled.section`
    padding: 0 20px;
`

export const Content = styled.div`
    max-width: 700px;

    h1 {
        color: ${colors.dark};
        font-size: 30px;
        margin-bottom: 50px;
    }
`

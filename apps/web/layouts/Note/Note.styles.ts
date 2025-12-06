import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Container = styled.main`
  margin-bottom: 150px;

  h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin: 40px 0 20px 0;
  }

  h2 {
    font-size: 20px;
    position: relative;
    display: flex;
    align-items: center;

    @media (min-width: ${medias.landscape}) {
      font-size: 22px;
    }

    &:before {
      content: "";
      width: 24px;
      height: 24px;
      margin-right: 8px;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url("data:image/svg+xml;utf8,<svg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M16 5H2v4h2v2h2v2H4v2H2v4h14v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5zm0 2v2h2v2h2v2h-2v2h-2v2H4v-2h2v-2h2v-2H6V9H4V7h12z' fill='currentColor'/></svg>");
    }
  }

  h3 {
    font-size: 16px;

    @media (min-width: ${medias.landscape}) {
      font-size: 18px;
    }
  }

  h4 {
    font-size: 14px;

    @media (min-width: ${medias.landscape}) {
      font-size: 16px;
    }
  }

  h5 {
    font-size: 12px;

    @media (min-width: ${medias.landscape}) {
      font-size: 14px;
    }
  }

  h6 {
    font-size: 10px;

    @media (min-width: ${medias.landscape}) {
      font-size: 12px;
    }
  }

  ul {
    list-style: unset;
    padding-left: 20px;
    line-height: 1.7;
    font-size: 15px;

    li {
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 15px;
    margin-bottom: 20px;
  }
`

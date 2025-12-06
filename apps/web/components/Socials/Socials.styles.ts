import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'
import { motion } from "framer-motion";

export const Component = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;

  @media (min-width: ${medias.landscape}) {
    flex-direction: row;
  }

  a {  
    svg {
      color: ${colors.dark};
      height: 22px;
      width: 22px;
    }

    p {
      font-weight: 500;
    }
  }
`

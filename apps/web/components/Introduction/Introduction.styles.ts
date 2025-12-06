import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'
import { motion } from "framer-motion";

export const Component = styled.section``

export const Content = styled(motion.div)`
  p {
    color: ${colors.black};
    margin: 20px 0;
  }
`
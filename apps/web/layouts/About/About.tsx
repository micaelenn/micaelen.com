"use client"

// external dependencies
import React, { FC } from 'react'
import { PortableText } from '@portabletext/react'
import { motion } from "framer-motion";

// internal dependencies
import { Container } from './About.styles'
import { ProjectProps } from '@/utils/types/ProjectProps'
import { parentVariants, childrenVariants } from '@/styles/animations'

// types
interface AboutLayoutProps {
  data: {
    title: string;
    description: [];
    projects: ProjectProps[];
  }
}

const AboutLayout: FC<AboutLayoutProps> = ({ data }) => {
  return (
    <Container className="container">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={childrenVariants}>
          <PortableText
            value={data.description}
          /> 
        </motion.div>
      </motion.div>
    </Container>
	);
};

export default AboutLayout;

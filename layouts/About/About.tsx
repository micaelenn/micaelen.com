"use client"

// external dependencies
import React, { FC } from 'react'
import { PortableText } from '@portabletext/react'

// internal dependencies
import { Container } from './About.styles'
import { ProjectProps } from '@/utils/types/ProjectProps'

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
    <Container className="container portable-text">
      <PortableText
        value={data.description}
      /> 
    </Container>
	);
};

export default AboutLayout;

"use client"

// external dependencies
import React, { FC } from 'react'
import Image from 'next/image'

// internal dependencies
import { Container } from './404.styles'

// types
interface NotFoundLayoutProps {
  data: {
    image: string;
    title: string;
  }
}

const NotFoundLayout: FC<NotFoundLayoutProps> = ({ data }) => {
  const { image, title } = data
  return (
    <Container className="container">
      <Image 
        src={image} 
        alt={title}
        width={150}
        height={150}
      />
      <h2>{title}</h2>
    </Container>
	);
};

export default NotFoundLayout;

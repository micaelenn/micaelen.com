"use client"

// external dependencies
import React, { FC } from 'react'
import { PortableText } from '@portabletext/react'

// internal dependencies
import { Container } from './Post.styles'
import Bradcrumb from '@/components/Bradcrumb/Bradcrumb'
// types
interface PostLayoutProps {
 
}

const PostLayout: FC<PostLayoutProps> = (data: any) => {
  return (
    <Container className="container">
      <Bradcrumb 
        previous={`til`}
        title={data.content.title} 
      />

      <PortableText
        value={data.content.info}
      />
    </Container>
	);
};

export default PostLayout;

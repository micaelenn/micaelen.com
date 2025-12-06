"use client"

// external dependencies
import React, { FC } from 'react'
import { PortableText } from '@portabletext/react'

// internal dependencies
import { Container } from './Note.styles'

import { PostProps } from '@/utils/types/PostProps'
import Heading from '@/components/Heading/Heading'

// types
interface NoteLayoutProps {
  data: PostProps
}

const NoteLayout: FC<NoteLayoutProps> = ({ data }) => {
  const { title, excerpt, thumbnail, createdAt, content } = data
  
  return (
    <Container className="container">
      <Heading 
        title={title} 
        description={excerpt}
        image={thumbnail}
        createdAt={createdAt}
      />

       <PortableText
          value={content}
        />
    </Container>
	);
};

export default NoteLayout;

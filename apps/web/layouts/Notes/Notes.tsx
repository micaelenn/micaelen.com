"use client"

// external dependencies
import React, { FC } from 'react'

// internal dependencies
import { Container } from './Notes.styles'
import Listing from '@/components/Listing/Listing';
import { PostProps } from '@/utils/types/PostProps';

// types
interface NotesLayoutProps {
  data: PostProps[];
}

const NotesLayout: FC<NotesLayoutProps> = ({ data }) => {    
  return (
    <Container className="container">
      <Listing posts={data} />
    </Container>
	);
};

export default NotesLayout;

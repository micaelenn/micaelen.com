"use client"

// external dependencies
import React, { FC } from 'react'

// internal dependencies
import { Container } from './Notes.styles'
import Listing from '@/components/Listing/Listing';

// types
interface NotesLayoutProps {
 
}

const NotesLayout: FC<NotesLayoutProps> = (data) => {  
  console.log(data)
  
  return (
    <Container className="container">
      <Listing posts={data.data} />
    </Container>
	);
};

export default NotesLayout;

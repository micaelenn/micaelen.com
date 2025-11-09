"use client" 

// external dependencies
import React, { FC  } from 'react';

// internal dependencies
import { Container } from './Homepage.styles'
import Introduction from '@/components/Introduction/Introduction'

// types
interface HomepageLayoutProps {}

const HomepageLayout: FC<HomepageLayoutProps> = ( data ) => {        
  return (
    <Container className="container">
      <Introduction content={data.introduction} />
    </Container>
	);
};

export default HomepageLayout;

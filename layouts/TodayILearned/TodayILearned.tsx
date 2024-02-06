"use client"

// external dependencies
import React, { FC } from 'react'

// internal dependencies
import { Container } from './TodayILearned.styles'
import Heading from '@/components/Heading/Heading'
import Listing from '@/components/Listing/Listing'

// types
interface TodayILearnedLayoutProps {
 
}

const TodayILearnedLayout: FC<TodayILearnedLayoutProps> = (data: any) => {  
  return (
    <Container className="container">
      <Heading 
        title={data.introduction.title} 
        description={data.introduction.description}
      />

      <Listing posts={data.posts} />
    </Container>
	);
};

export default TodayILearnedLayout;

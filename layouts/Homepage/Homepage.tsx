'use client'

// external dependencies
import React, { FC  } from 'react';

// internal dependencies
import { Container } from './Homepage.styles'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { StatusProps } from '@/utils/types/StatusProps';

// types
interface HomepageLayoutProps {
  headerContent: StatusProps
}

const HomepageLayout: FC<HomepageLayoutProps> = ({ headerContent }) => {  
  return (
    <Container>
      <Header 
        updates={headerContent} 
        title={`Micaelen Miranda`}
      />
      
      <Footer />
    </Container>
	);
};

export default HomepageLayout;

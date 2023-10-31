'use client'

// external dependencies
import React, { FC  } from 'react';

// internal dependencies
import { Container } from './Homepage.styles'
import Header from '@/components/Header/Header'
import ImageText from '@/components/ImageText/ImageText'
import Separator from '@/components/Separator/Separator'
import Footer from '@/components/Footer/Footer'

// types
import { StatusProps } from '@/utils/types/StatusProps'
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

      <ImageText />

      <Separator />

      <Footer />
    </Container>
	);
};

export default HomepageLayout;

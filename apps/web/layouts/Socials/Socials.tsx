"use client"

// external dependencies
import React, { FC } from 'react'

// internal dependencies
import { Container } from './Socials.styles'
import { SocialMediasProps } from '@/utils/types/SocialMediasProps'
import Socials from '@/components/Socials/Socials'

// types
interface SocialsLayoutProps {
  data: {
    title: string;
    socialMedias: SocialMediasProps[];
  }
}

const SocialsLayout: FC<SocialsLayoutProps> = ({ data }) => {  
  return (
    <Container className="container">
      <Socials socials={data.socialMedias}/>
    </Container>
	);
};

export default SocialsLayout;

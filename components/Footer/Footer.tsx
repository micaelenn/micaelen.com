"use client"

// external dependencies
import React, { FC } from 'react'

// internal dependencies
import { Component } from './Footer.styles'
import { SocialMediasProps } from '@/utils/types/SocialMediasProps';
import Social from '@/components/Social/Social'

// types
interface FooterProps {
  content: {
    social: SocialMediasProps[];
  }
}

const Footer: FC<FooterProps> = ({ content }) => {
  return (
    <Component>
      <Social socialMedias={content.social}/>
    </Component>
	);
};

export default Footer;

"use client"

// external dependencies
import React, { FC } from 'react';

// internal dependencies
import { Component } from './Header.styles'
import { StatusProps } from '@/utils/types/StatusProps';
import { SocialMediasProps } from '@/utils/types/SocialMediasProps';
import Updates from '@/components/Updates/Updates'
import Social from '@/components/Social/Social'

// types
interface HeaderProps {
  content: {
    updates: StatusProps;
    social: {
      socialMedias: SocialMediasProps[]
    }
  }
}

const Header: FC<HeaderProps> = ({ content }) => {       
  return (
    <Component className="container">
      <Updates status={content.updates} />
      <Social socialMedias={content.social.socialMedias} />
    </Component>
	);
};

export default Header;

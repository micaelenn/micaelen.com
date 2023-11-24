// external dependencies
import React, { FC } from 'react';

// internal dependencies
import { Component } from './Social.styles'
import { SocialMediasProps } from '@/utils/types/SocialMediasProps';

// types
interface SocialProps {
  socialMedias: SocialMediasProps[];
}

const Social: FC<SocialProps> = ({ socialMedias }) => {    
  return (
    <Component>
    {socialMedias.map((item, index) =>
      <li key={index}>
        <a href={item.url} target="_blank">
          {item.name}
        </a>
      </li>
    )}
    </Component>
	);
};

export default Social;

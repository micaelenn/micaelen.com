// external dependencies
import React, { FC } from 'react'
import Image from 'next/image'

// internal dependencies
import { Component } from './Social.styles'
import { getImageURL } from '@/utils/helpers/assets'

// types
import { SocialProps } from './SocialProps'

const Social: FC<SocialProps> = ({ social }) => {      
  return (
    <Component>
      <ul>
      {social.medias.map((item, index) =>
        <li key={index}>
          <a href={item.url} target="_blank">
            <Image 
              src={getImageURL(item.icon)}
              alt={`${item.name} Logo`}
              height={22}
              width={22}
            />
            {item.name}
          </a>
        </li>
      )}
      </ul>
    </Component>
	);
};

export default Social;

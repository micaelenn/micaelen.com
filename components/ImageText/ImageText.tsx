// external dependencies
import React, { FC } from 'react';
import Image from 'next/image'

// internal dependencies
import { Component } from './ImageText.styles'

// types
interface ImageTextProps {
  image?: {
    src: string;
    alt: string;
  }
  text?: string;
} 

const ImageText: FC<ImageTextProps> = ({image, text}) => {
  return (
    <Component className="container">
      <div>
        <Image 
          src={`/images/profile.jpeg`}
          alt={`Profile Picture`}
          loading={`eager`}
          height={300}
          width={300}
        />
      </div>

      <div>
        <p>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`}
        </p>
      </div>
    </Component>
	);
};

export default ImageText;

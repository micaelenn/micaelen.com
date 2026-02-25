// external dependencies
import React, { FC } from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

// internal dependencies
import { Component } from './Heading.styles'
import { getImageURL } from '@/utils/helpers/assets'
import { formatDateToEnGB } from '@/utils/helpers/string';

// types
interface HeadingProps {
  title: string;
  description: string;
  createdAt: string;
  image: object;
}

const Heading: FC<HeadingProps> = ({ title, description, createdAt, image }) => {
  return (
    <Component>
      <img
        src={getImageURL(image)}
        alt={title}
        height={92}
        width={120}
      />

      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <time>
          {formatDateToEnGB(createdAt)}
        </time>
      </div>
    </Component>
  );
};

export default Heading;

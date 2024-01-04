// external dependencies
import React, { FC } from 'react'
import Link from 'next/link'

// internal dependencies
import { Component, Title } from './Card.styles'
import { PostProps } from '@/utils/types/PostProps';
import { formatDateToEnGB } from '@/utils/helpers/format';

// types
interface CardProps {
  info: PostProps;
}

const Card: FC<CardProps> = ({ info }) => {  
  return (
    <Component>
      <Title>
        <h2>{info.title}</h2>
        <p>{info.subject}</p>
      </Title>

      <time>
        {formatDateToEnGB(info._createdAt)}
      </time>

      <Link href={`/til/${info.slug.current}`}>
        {info.title}
      </Link>
    </Component>
	);
};

export default Card;

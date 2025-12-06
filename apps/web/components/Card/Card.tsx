// external dependencies
import React, { FC } from 'react'
import Link from 'next/link'

// internal dependencies
import { Component, Topics, Title, Info } from './Card.styles'
import { PostProps } from '@/utils/types/PostProps';
import Pill from '@/components/Pill/Pill';
import { formatDateToEnGB } from '@/utils/helpers/string';

// types
interface CardProps {
  info: PostProps;
}

const Card: FC<CardProps> = ({ info }) => {  
  return (
    <Component>
      <Title className="title">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16 5H2v4h2v2h2v2H4v2H2v4h14v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5zm0 2v2h2v2h2v2h-2v2h-2v2H4v-2h2v-2h2v-2H6V9H4V7h12z" fill="currentColor"/></svg>
        <h2>{info.title}</h2>
      </Title>
  
      <p>{info.excerpt}</p>

      <Topics>
        {info.topics ? 
          info.topics.map((item, index) => 
            <Pill 
              key={index} 
              label={item} 
            />
          )
        : null}
      </Topics>

      <Info>
        <time>
          {formatDateToEnGB(info.createdAt)}
        </time>

        <span>{`Read More →`}</span>
      </Info>

      <Link href={`${info.slug}`}>
        {info.title}
      </Link>
    </Component>
	);
};

export default Card;

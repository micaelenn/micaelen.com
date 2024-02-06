// external dependencies
import React, { FC } from 'react';
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

// internal dependencies
import { Component, Content, Title } from './Introduction.styles'
import { getImageURL } from '@/utils/helpers/assets'

// types
interface IntroductionProps {
  content: {
    image: object;
    title: string;
    description: [];
  }
} 

const Introduction: FC<IntroductionProps> = ({ content }) => {
  return (
      <Component>
        <Content>
          <div>
            <Title>
              <h1>{content.title}</h1>
            </Title>

            <PortableText
              value={content.description}
            />
          </div>
          
          <div>
            <Image 
              src={getImageURL(content.image)}
              alt={`Profile Picture`}
              loading={`eager`}
              height={250}
              width={250}
            />
          </div>
        </Content>
      </Component>
	)
}

export default Introduction;

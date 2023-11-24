// external dependencies
import React, { FC } from 'react';
import Image from 'next/image'
import { Code } from "@phosphor-icons/react"
import { PortableText } from '@portabletext/react'

// internal dependencies
import { Component, Content, Title } from './Introduction.styles'
import Separator from '@/components/Separator/Separator'
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
      <Component className="container">
        <Content>
          <div>
            <Title>
              <h1>{content.title}</h1>
              <Code size={32} />
            </Title>

            <PortableText
              value={content.description}
            />
          </div>
          
          <div>
            <Image 
              src={getImageURL(content.image).url()}
              alt={`Profile Picture`}
              loading={`eager`}
              height={250}
              width={250}
            />
          </div>
        </Content>

        <Separator />
      </Component>
	)
}

export default Introduction;

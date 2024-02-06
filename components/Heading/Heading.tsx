// external dependencies
import React, { FC } from 'react'
import { PortableText } from '@portabletext/react'

// internal dependencies
import { Component, Content } from './Heading.styles'

// types
interface HeadingProps {
  title: string;
  description: [];
}

const Heading: FC<HeadingProps> = ({title, description}) => {
  return (
    <Component>
      <Content>
        <h1>{title}</h1>

        <PortableText
          value={description}
        />
      </Content>
    </Component>
	);
};

export default Heading;

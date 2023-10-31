// external dependencies
import React, { FC } from 'react';

// internal dependencies
import { Component } from './Social.styles'

// types
interface SocialProps {}

const socialMedias = [
  {
    name: "Github",
    url: "https://www.github.com/micaelenn"
  },
  {
    name: "Linkedin",
    url: "https://www.github.com/micaelenn"
  },
  {
    name: "E-mail",
    url: "mailto:micaelenmiranda.dev@gmail.com"
  }
]

const Social: FC<SocialProps> = ({}) => {
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

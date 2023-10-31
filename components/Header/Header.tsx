// external dependencies
import React, { FC } from 'react';

// internal dependencies
import { Component, Square, Title } from './Header.styles'
import { StatusProps } from '@/utils/types/StatusProps';
import Updates from '@/components/Updates/Updates'
import Social from '@/components/Social/Social'

// types
interface HeaderProps {
  updates: StatusProps;
  title: string;
}

const Header: FC<HeaderProps> = ({ updates, title }) => {  
  return (
    <Component className="container">
      <Updates status={updates} />

      <Title className="flex-centralized">
        <Square>
          <h1>{title}</h1>
        </Square>
      </Title>

      <Social />
    </Component>
	);
};

export default Header;

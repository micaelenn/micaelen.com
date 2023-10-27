// external dependencies
import React, { FC } from 'react';

// internal dependencies
import { Component } from './Header.styles'

// types
interface HeaderProps {
 
}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <Component>
      <h1>Header</h1>
    </Component>
	);
};

export default Header;

// external dependencies
import React, { FC } from 'react';

// internal dependencies
import { Component } from './Separator.styles'

// types
interface SeparatorProps {
 
}

const Separator: FC<SeparatorProps> = ({}) => {
  return (
    <Component className="container">
      <hr className="conteiner double-border" />
    </Component>
	);
};

export default Separator;

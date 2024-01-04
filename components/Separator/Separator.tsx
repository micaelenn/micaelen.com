// external dependencies
import React, { FC } from 'react';
import { DotsThreeOutline } from "@phosphor-icons/react"

// internal dependencies
import { Component } from './Separator.styles'

// types
interface SeparatorProps {
 
}

const Separator: FC<SeparatorProps> = ({}) => {
  return (
    <Component>
      <DotsThreeOutline size={28} weight="fill" />
    </Component>
	);
};

export default Separator;

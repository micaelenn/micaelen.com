// external dependencies
import React, { FC } from 'react'

// internal dependencies
import { Component } from './Pill.styles'

// types
interface PillProps {
  label: string;
}

const Pill: FC<PillProps> = ({ label }) => {
  return (
    <Component>
      {label}
    </Component>
	);
};

export default Pill;

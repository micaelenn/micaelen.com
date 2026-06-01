// external dependencies
import React, { FC } from 'react'

// internal dependencies
import { Component } from './Pill.styles'

// types
interface PillProps {
  className?: string;
  label: string;
}

const Pill: FC<PillProps> = ({ className, label }) => {
  return (
    <Component className={className}>
      {label}
    </Component>
  );
};

export default Pill;

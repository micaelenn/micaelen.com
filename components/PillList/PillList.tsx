// external dependencies
import React, { FC } from 'react'

// internal dependencies
import { Component, List } from './PillList.styles'
import Pill from '@/components/Pill/Pill'

// types
interface PillListProps {
  className?: string;
  title?: string;
  items: string[]
}

const PillList: FC<PillListProps> = ({ className, title, items }) => {
  return (
    <Component className={className}>
      {title ? <h2>{title}</h2> : null}

      <List>
        {items.map((item, index) =>
          <Pill key={index} label={item} />
        )}
      </List>
    </Component>
  );
};

export default PillList;

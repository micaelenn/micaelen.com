// external dependencies
import React, { FC } from 'react'

// internal dependencies
import { Component, List } from './PillList.styles'
import Pill from '@/components/Pill/Pill'

// types
interface PillListProps {
  title?: string;
  items: string[]
}

const PillList: FC<PillListProps> = ({ title, items }) => {  
  return (
    <Component>
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

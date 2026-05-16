// external dependencies
import React, { FC, useEffect, useState } from 'react'
import { Component, List } from './Updates.styles'

interface UpdatesProps {
  status: string[];
}

const Updates: FC<UpdatesProps> = ({ status }) => {
  const [visibleIndex, setVisibleIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % status.length)
    }, 5000);

    return () => clearInterval(interval)
  }, [status.length])

  return (
    <Component>
      <List className="updates">
        {status.map((item, index) => (
          <li
            key={index}
            className={index === visibleIndex ? 'is-visible' : ''}
          >
            {item}
          </li>
        ))}
      </List>
    </Component>
  );
};

export default Updates;
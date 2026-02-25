// external dependencies
import React, { FC, useEffect, useState } from 'react'
import { Component, List } from './Updates.styles'
import { StatusProps } from '@/utils/types/StatusProps'
interface StatusItem {
  key: keyof StatusProps;
  emoji: string;
  label: string;
}

interface UpdatesProps {
  status: StatusProps;
}

const Updates: FC<UpdatesProps> = ({ status }) => {
  const [visibleIndex, setVisibleIndex] = useState<number>(0)

  const statusItems: StatusItem[] = [
    { key: 'listening', emoji: '🎶', label: '' },
    { key: 'learning', emoji: '📚', label: 'Learning:' },
    { key: 'watching', emoji: '📺', label: 'Watching:' },
    { key: 'location', emoji: '🌐', label: '' },
    { key: 'watchedMovie', emoji: '🎬', label: 'Last Movie:' },
    { key: 'playing', emoji: '🎮', label: 'Playing:' },
    { key: 'version', emoji: '👾', label: 'Version:' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % statusItems.length)
    }, 5000);

    return () => clearInterval(interval)
  }, [statusItems.length])

  return (
    <Component>
      <List className="updates">
        {statusItems.map((item, index) => (
          <li
            key={item.key}
            className={index === visibleIndex ? 'is-visible' : ''}
          >
            {status[item.key] && `${item.emoji} ${item.label} ${status[item.key]}`}
          </li>
        ))}
      </List>
    </Component>
  );
};

export default Updates;
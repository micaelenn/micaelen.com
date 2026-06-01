'use client'

import React, { FC } from 'react'
import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import { useTheme } from '@/context/ThemeContext'
import { Button } from './ThemeToggle.styles'

const ThemeToggle: FC = () => {
  const { theme, toggle } = useTheme()

  return (
    <Button
      onClick={toggle}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? <MoonIcon size={18} /> : <SunIcon size={18} />}
    </Button>
  )
}

export default ThemeToggle

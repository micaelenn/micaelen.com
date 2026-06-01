import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '@/context/ThemeContext'

jest.mock('@/context/ThemeContext', () => ({
  useTheme: jest.fn(),
}))

const mockUseTheme = useTheme as jest.Mock

function renderComponent() {
  return render(<ThemeToggle />)
}

describe('ThemeToggle', () => {
  afterEach(() => jest.clearAllMocks())

  it('renders a button with an accessible label in light mode', () => {
    mockUseTheme.mockReturnValue({ theme: 'light', toggle: jest.fn() })
    renderComponent()
    expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument()
  })

  it('renders a button with an accessible label in dark mode', () => {
    mockUseTheme.mockReturnValue({ theme: 'dark', toggle: jest.fn() })
    renderComponent()
    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument()
  })

  it('calls toggle when the button is clicked', async () => {
    const toggle = jest.fn()
    mockUseTheme.mockReturnValue({ theme: 'light', toggle })
    renderComponent()
    await userEvent.click(screen.getByRole('button'))
    expect(toggle).toHaveBeenCalledTimes(1)
  })
})


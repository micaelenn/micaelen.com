import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { ThemeProvider, useTheme } from './ThemeContext'

const TestConsumer = () => {
  const { theme, toggle } = useTheme()
  return (
    <>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggle}>toggle</button>
    </>
  )
}

function renderWithProvider() {
  return render(
    <ThemeProvider>
      <TestConsumer />
    </ThemeProvider>
  )
}

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
    window.matchMedia = jest.fn().mockReturnValue({ matches: false })
  })

  it('defaults to light theme when no preference is stored', () => {
    renderWithProvider()
    expect(screen.getByTestId('theme')).toHaveTextContent('light')
  })

  it('defaults to dark when system preference is dark and no value is stored', () => {
    window.matchMedia = jest.fn().mockReturnValue({ matches: true })
    renderWithProvider()
    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
  })

  it('toggles from light to dark on click', async () => {
    renderWithProvider()
    await userEvent.click(screen.getByRole('button', { name: 'toggle' }))
    expect(screen.getByTestId('theme')).toHaveTextContent('dark')
  })

  it('toggles from dark back to light on second click', async () => {
    renderWithProvider()
    await userEvent.click(screen.getByRole('button', { name: 'toggle' }))
    await userEvent.click(screen.getByRole('button', { name: 'toggle' }))
    expect(screen.getByTestId('theme')).toHaveTextContent('light')
  })

  it('updates data-theme attribute on <html> when toggling', async () => {
    renderWithProvider()
    await userEvent.click(screen.getByRole('button', { name: 'toggle' }))
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
  })

  it('persists the new theme to localStorage when toggling', async () => {
    renderWithProvider()
    await userEvent.click(screen.getByRole('button', { name: 'toggle' }))
    expect(localStorage.getItem('theme')).toBe('dark')
  })
})

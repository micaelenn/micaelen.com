import { render, screen, within } from '@testing-library/react';
import Socials from "./Socials"

function renderComponent() {
  const socialsMock = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "<svg></svg>"
    }
  ]

  render(<Socials socials={socialsMock} />)
  return screen.getAllByRole('link')
}

describe("Socials", () => {
  it("should have at least (1) link available", () => {
    const socialLinks = renderComponent()
    expect(socialLinks.length).toBeGreaterThan(0)
  })

  it("should contain name, url and icon", () => {
    const socialLinks = renderComponent()
    expect(socialLinks.length).toBeGreaterThan(0)

    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute('href')
      expect(link.getAttribute('href')).not.toBe('')

      const name = within(link).getByText(/.+/)
      expect(name).toBeInTheDocument()

      const icon = link.querySelector('div')
      expect(icon).toBeInTheDocument()
      expect(icon?.innerHTML).not.toBe('')
    })
  })

  it("should always open links in a new tab", () => {
    const socialLinks = renderComponent()

    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
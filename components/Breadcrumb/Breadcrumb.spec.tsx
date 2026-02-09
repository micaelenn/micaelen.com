import { render, screen } from '@testing-library/react';
import Breadcrumb from './Breadcrumb';

function renderComponent() {
  return render(
    <Breadcrumb
      homepageTitle="homepage"
      currentTitle="current"
      currentPath="current-path"
    />
  )
}

describe('Breadcrumb', () => {
  it("should render the 'Breadcrumb' component", () => {
    renderComponent()
  })

  it("should show the correct titles", () => {
    renderComponent()
    const titles = ['homepage', 'current']
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    })
  })

  it('should display (2) links', () => {
    renderComponent()
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2);
  })

  it('should display a link for homepage and other for current page', () => {
    renderComponent()

    const links = [
      {
        name: "homepage",
        path: "/"
      },
      {
        name: 'current',
        path: 'current-path'
      }
    ]

    links.forEach(link => {
      const linkElement = screen.getByRole('link', { name: link.name })
      expect(linkElement).toHaveAttribute('href', link.path)
    });
  })

  it("should render separator", () => {
    renderComponent()
    expect(screen.getByText('/')).toBeInTheDocument();
  })
})
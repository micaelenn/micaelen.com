import { render, screen } from '@testing-library/react';
import Footer from './Footer';

function renderComponent() {
  render(<Footer />)
}

describe("Footer", () => {
  it("should render the 'Footer' component", () => {
    renderComponent()
  })
})
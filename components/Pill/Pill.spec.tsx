import { render, screen } from '@testing-library/react';
import Pill from './Pill';

function renderComponent() {
  return render(
    <Pill label={'Show More'} />
  )
}

describe('Pill', () => {
  it("should render the 'Pill' component", () => {
    renderComponent()
    expect(screen.getByText('Show More')).toBeInTheDocument()
  })
})
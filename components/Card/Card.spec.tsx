import { render, screen } from '@testing-library/react';
import Card from './Card';
import { PostProps } from '@/utils/types/PostProps';

function renderComponent() {
  const topicsMock = ['RAG', 'LangChain']

  const postMock: PostProps = {
    title: 'Hello World',
    slug: 'hello-world',
    thumbnail: {},
    createdAt: '2025-11-09T00:00:00.000Z',
    excerpt: 'Hello World',
    content: [],
    topics: [],
  }

  return render(<Card info={postMock} />)
}

describe('Card', () => {
  it("should render the 'Card' component", () => {
    renderComponent()
  })

  it("should render title as a h2 heading", () => {
    renderComponent()
    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(1)
    expect(headings[0].tagName).toBe('H2')
  })

  it("should display date in an user friendly format", () => {
    renderComponent()
    const dateText = screen.getByText(/^\d{2}\s[A-Za-z]{3}\s\d{4}$/)
    expect(dateText).toBeInTheDocument()
  })

  it("should have a link for the article page", () => {
    renderComponent()
    const link = screen.getByRole('link', { name: "Hello World" })
    expect(link).toHaveAttribute('href', 'hello-world')
  })
})
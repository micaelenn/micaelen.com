// external modules
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// internal modules
import Heading from './Heading'
import { formatDateToEnGB } from '@/utils/helpers/string'

jest.mock('@/utils/helpers/assets', () => ({
  getImageURL: () => 'https://mockedurl.com/image.png',
}))

const mockProps = {
  title: "Title Example",
  description: "Description Example",
  createdAt: "2026-02-25",
  image: {},
}

function renderComponent() {
  return render(<Heading {...mockProps} />)
}

describe("Heading", () => {
  it("should render an image, title, and description", () => {
    renderComponent()

    // check title
    const title = screen.getByText(mockProps.title)
    expect(title).toBeInTheDocument()
    expect(title).not.toBeEmptyDOMElement()

    // check description
    const description = screen.getByText(mockProps.description)
    expect(description).toBeInTheDocument()
    expect(description).not.toBeEmptyDOMElement()

    // check image
    const image = screen.getByRole("img", { name: mockProps.image.alt })
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", mockProps.image.url)
  })

  it("should have a h1 as the unique title", () => {
    renderComponent()
    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(1)
    expect(headings[0].tagName).toBe('H1')
  })

  it("should ensure the image have an alt attribute and not empty", () => {
    renderComponent()
    const image = screen.getByRole("img", { name: mockProps.image.alt })
    expect(image).toHaveAttribute('alt', mockProps.image.alt)
  })

  it("should display the date in the correct format (00 Mon 0000)", () => {
    renderComponent()
    const formattedDate = formatDateToEnGB(mockProps.createdAt)
    expect(screen.getByText(formattedDate)).toBeInTheDocument()
  })
})

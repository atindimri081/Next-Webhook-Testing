import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

describe('Home Page', () => {
  it('renders a heading', () => {
    render(<Home />)
    // The test looks for any heading level (h1-h6) on your main page
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
})
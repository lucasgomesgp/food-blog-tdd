import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { SearchArea } from '@/components/search-area'
import { SearchInputProvider } from '@/components/search-provider'

describe('SearchArea Component', () => {
  it('should be abl to write a value on input', () => {
    render(
      <SearchInputProvider>
        <SearchArea />
      </SearchInputProvider>
    )
    const inputEl = screen.getByPlaceholderText('Search for articles')

    fireEvent.change(inputEl, { target: { value: 'Healthy' } })
    expect(inputEl).toBeInTheDocument()
    expect(inputEl).toHaveAttribute('value', 'Healthy')
  })
})

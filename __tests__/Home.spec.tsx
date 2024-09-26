import { describe, expect, it } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'

import Home from '@/app/page'
import { QueryProvider } from '@/components/query-client-provider'

describe('Homepage', () => {
  it('should be able to render posts', async () => {
    const HomePage = await Home()
    render(<QueryProvider>{HomePage}</QueryProvider>) // mock provider for prevent error
    const postTitleEl1 = await screen.findByText(
      'Elevate Your Palate: How Traveling and Dining at Top Restaurants'
    ) //first post
    const postTitleEl2 = await screen.findByText(
      'Fueling Success: The Importance of a Healthy Diet for Bodybuilders'
    ) // second post
    expect(postTitleEl1).toBeInTheDocument()
    expect(postTitleEl2).toBeInTheDocument()
  })
})

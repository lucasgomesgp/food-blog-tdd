import { beforeEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

import { BlogItem } from '@/components/blog-item'

const setup = () => {
  render(
    <BlogItem
      altImg="Mountain"
      authorImg="/lucas.png"
      authorName="Lucas Gomes"
      date={new Date().toString()}
      imageSrc="/mountain.png"
      minRead={10}
      shortDescription="Lorem ipsum"
      slug="climbing-mountain"
      tag="climbing"
      title="Climbing a mountain"
    />
  )
}

beforeEach(() => {
  cleanup()
})
describe('BlogItem Component', () => {
  it('should be able to redirect user after click', () => {
    setup()
    const postElLink = screen.getByTestId('link-post')
    expect(postElLink).toHaveAttribute('href', '/post/climbing-mountain')
  })
  it('should be able to show images of post and author', () => {
    setup()
    const postImgEl = screen.getByTestId('post-img') as HTMLImageElement
    const authorImgEl = screen.getByTestId('author-img') as HTMLImageElement

    expect(postImgEl).toBeInTheDocument()
    expect(authorImgEl).toBeInTheDocument()
    expect(postImgEl.src).toContain('/mountain.png')
    expect(authorImgEl.src).toContain('/lucas.png')
  })
})

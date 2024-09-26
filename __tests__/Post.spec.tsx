import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { firstHeading, richTextMock } from '@/utils/data/rich-text-mock'

import { Post } from '@/components/post'
import dayjs from 'dayjs'

const setup = () => {
  render(
    <Post
      alt="health post"
      authorDescription="Lorem ipsum"
      authorImageUrl="/author.png"
      authorName="Lucas"
      coverImage="/cover.png"
      createdAt={new Date()}
      description={{
        raw: richTextMock,
      }}
      tag="health"
      timeToRead={5}
      title="Health Travel"
    />
  )
}
afterEach(() => {
  cleanup()
})
describe('Post Component', () => {
  it('should be able to presentation author info', () => {
    setup()

    const authorName = screen.getByText('Lucas')
    const authorDescription = screen.getByText('Lorem ipsum')
    const authorImage = screen.getByTestId('author-img') as HTMLImageElement

    expect(authorName).toBeInTheDocument()
    expect(authorDescription).toBeInTheDocument()
    expect(authorImage.src).contain('author.png')
  })

  it('should be able to presentation post info', () => {
    setup()
    const date = dayjs(new Date()).format('MMM D[,] YYYY')
    const title = screen.getByText('Health Travel')
    const firstText = screen.getByText(firstHeading)
    const tag = screen.getByText('health')
    const timeToRead = screen.getByText('5 minutes read')
    const createdAt = screen.getByText(date)
    const coverImage = screen.getByTestId('cover-img') as HTMLImageElement

    expect(title).toBeInTheDocument()
    expect(tag).toBeInTheDocument()
    expect(timeToRead).toBeInTheDocument()
    expect(createdAt).toBeInTheDocument()
    expect(firstText).toBeInTheDocument()
    expect(coverImage.src).contain('cover.png')
  })
})

import type { RichTextContent } from '@graphcms/rich-text-types'

export interface IPosts {
  id: string
  title: string
  createdAt: Date
  slug: string
  tag: string
  content: RichTextContent
  timeToRead: number
  shortDescription: string
  coverImage: {
    altText: string
    url: string
  }
  author: {
    id: string
    name: string
    description: string
    picture: {
      url: string
    }
  }
}

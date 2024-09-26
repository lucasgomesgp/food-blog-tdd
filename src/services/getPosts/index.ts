import type { IPosts } from '@/utils/types/IPosts'
import { env } from '@/env/client'

export async function getPosts() {
  const query = `query Post {
  posts{
    id
    title
    createdAt
    slug
    tag
    shortDescription
    timeToRead
    content{
      raw
    }
    coverImage {
      altText
      url
    }
    author {
      id
      name
      description
      picture {
        url
      }
    }
  }
}`
  const response = await fetch(env.NEXT_PUBLIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  })
  const result = await response.json()
  return result.data.posts as Array<IPosts>
}

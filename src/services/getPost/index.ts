import type { IPost } from '@/utils/types/IPost'
import { env } from '@/env/server'

export async function getPost(slug: string) {
  const query = `query Post{
  post(where: {slug : "${slug}"}) {
    id
    title
    createdAt
    slug
    tag
    shortDescription
    content{
      raw
    }
    timeToRead
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
  if (process.env.API_URL) {
    const response = await fetch(process.env.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    })
    const result = await response.json()
    return result.data.post as IPost
  }
}

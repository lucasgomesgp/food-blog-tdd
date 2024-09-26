import { HttpResponse, http } from 'msw'

import { env } from '@/env/server'
import { mockPosts } from '../utils/data/posts-mock'
import { uniquePost } from '@/utils/data/unique-post-mock'

interface RequestQueryBody {
  query: string
}
interface ResponseQueryBody {
  query: string
}
interface QueryParams {
  slug: string
}
export const handlers = [
  http.post<QueryParams, RequestQueryBody>(
    process.env.API_URL,
    async ({ request }) => {
      const { query } = await request.json()
      if (query.includes('posts')) {
        return HttpResponse.json(mockPosts)
      }
      if (query.includes('slug')) {
        return HttpResponse.json(uniquePost)
      }
      return HttpResponse.json({ message: 'Query not found' })
    }
  ),
]

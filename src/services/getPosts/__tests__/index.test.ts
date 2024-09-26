import { expect, it } from 'vitest'

import { getPosts } from '..'
import { mockPosts } from '@/utils/data/posts-mock'

it('should be able to return posts data', async () => {
  const posts = await getPosts()
  expect(JSON.stringify(posts)).toBe(JSON.stringify(mockPosts.data.posts))
})

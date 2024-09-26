import { expect, it } from 'vitest'

import { getPost } from '..'
import { uniquePost } from '@/utils/data/unique-post-mock'

it('should be able to receive post data', async () => {
  const data = await getPost('elevate-your-palete')
  expect(JSON.stringify(data)).toBe(JSON.stringify(uniquePost.data.post))
})

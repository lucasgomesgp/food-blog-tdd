'use client'

import { useContext, useState } from 'react'

import { BlogItem } from './blog-item'
import LoadingItems from './loading-items'
import { SearchInputContext } from '@/context/search'
import { getPosts } from '@/services/getPosts'
import { useQuery } from '@tanstack/react-query'
import uuid from 'react-uuid'

export function Items() {
  const { searchInput } = useContext(SearchInputContext)
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading } = useQuery({
    queryKey: ['get-all-posts'],
    queryFn: async () => {
      const response = await getPosts()
      return response
    },
  })
  const postsFiltered = searchInput
    ? data?.filter(({ title }) =>
        title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : data
  const postsExists = postsFiltered !== undefined && postsFiltered.length >= 1
  const pagination = data !== undefined ? Math.ceil(data.length / 2) : null
  const postPerPage = 2
  const lastPosition = currentPage * postPerPage // 2 on first time
  const initialPosition = lastPosition - postPerPage // 0 on first time

  if (isLoading) return <LoadingItems />
  return (
    <>
      <div className="flex flex-wrap gap-20 mt-20 items-center justify-center px-5">
        {postsExists ? (
          postsFiltered
            ?.slice(initialPosition, lastPosition)
            .map(
              ({
                id,
                coverImage,
                author,
                createdAt,
                timeToRead,
                slug,
                tag,
                title,
                shortDescription,
              }) => (
                <BlogItem
                  key={id}
                  altImg={coverImage.altText}
                  authorImg={author.picture.url}
                  authorName={author.name}
                  date={createdAt.toString()}
                  imageSrc={coverImage.url}
                  minRead={timeToRead}
                  shortDescription={shortDescription}
                  slug={slug}
                  tag={tag}
                  title={title}
                />
              )
            )
        ) : (
          <div className="w-full lg:min-h-96">
            <p className="text-lg text-red-700 text-center font-inter font-bold">
              No posts found
            </p>
          </div>
        )}
      </div>
      {postsExists && postsFiltered.length > 1 && (
        <div className="flex gap-5 items-center justify-center mt-10">
          {pagination &&
            Array.from({ length: pagination }).map((_, index) => {
              const position = index + 1
              const isActive = 'bg-blue-principal text-white'
              return (
                <button
                  type="button"
                  className={`border px-4 py-2 rounded-md text-black font-bold hover:scale-110 ${position === currentPage ? isActive : 'bg-slate-200'}`}
                  onClick={() => {
                    setCurrentPage(position)
                  }}
                  key={uuid()}
                >
                  {position}
                </button>
              )
            })}
        </div>
      )}
    </>
  )
}

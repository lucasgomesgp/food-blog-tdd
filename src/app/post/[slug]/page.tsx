import { Header } from '@/components/header'
import { Post } from '@/components/post'
import { getPost } from '@/services/getPost'

export default async function Page({
  params: { slug },
}: { params: { slug: string } }) {
  const data = await getPost(slug)
  return (
    <main>
      <Header />
      <section className="w-full flex justify-center items-center">
        {data !== undefined && data.id ? (
          <Post
            tag={data.tag}
            alt={data.coverImage.altText}
            authorDescription={data.author.description}
            authorImageUrl={data.author.picture.url}
            authorName={data.author.name}
            coverImage={data.coverImage.url}
            createdAt={data.createdAt}
            timeToRead={data.timeToRead}
            title={data.title}
            description={data.content}
          />
        ) : (
          <p>Post not exists</p>
        )}
      </section>
    </main>
  )
}

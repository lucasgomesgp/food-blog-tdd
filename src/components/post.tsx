import Image from 'next/image'
import { RichText } from '@graphcms/rich-text-react-renderer'
import type { RichTextContent } from '@graphcms/rich-text-types'
import { Tag } from './tag'
import { TimeToRead } from './time-to-read'
import { rendersHtmlTags } from '@/utils/data/renders'

export function Post({
  tag,
  title,
  createdAt,
  timeToRead,
  coverImage,
  alt,
  authorImageUrl,
  authorName,
  description,
  authorDescription,
}: {
  tag: string
  title: string
  createdAt: Date
  timeToRead: number
  coverImage: string
  alt: string
  authorImageUrl: string
  authorName: string
  description: {
    raw: RichTextContent
  }
  authorDescription: string
}) {
  return (
    <section className="max-w-[800px] flex flex-col items-center justify-center mt-24">
      <section className="flex flex-col gap-5">
        <Tag text={tag} />
        <h1 className="text-5xl font-bold font-merriweather">{title}</h1>
        <TimeToRead date={createdAt.toString()} timeInMinutes={timeToRead} />
        <Image
          src={coverImage}
          alt={alt}
          width={800}
          height={278}
          priority
          data-testid="cover-img"
          className="rounded-md max-h-[278px] max-w-[800px] w-full h-full"
        />
      </section>
      <section>
        <div className="flex items-center gap-[14px] mt-5 mb-10">
          <Image
            src={authorImageUrl}
            alt={authorName}
            priority
            width={42}
            height={42}
            data-testid="author-img"
            className="rounded-full"
          />
          <p className="font-merriweather text-sm font-bold leading-6">
            {authorName}
          </p>
        </div>
        <RichText content={description.raw} renderers={rendersHtmlTags} />
        <div className="flex items-center gap-7 border border-opacity-20 border-gray-principal bg-gray-footer-principal px-9 mb-4 mt-12 pt-[51px] pb-11 rounded-md">
          <Image
            src={authorImageUrl}
            alt={authorName}
            width={150}
            height={150}
            className="w-[150px] h-[150px] rounded-full"
          />
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-merriweather leading-10">
              Written by {authorName}
            </p>
            <p className="font-roboto text-lg leading-7 text-left">
              {authorDescription}
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}

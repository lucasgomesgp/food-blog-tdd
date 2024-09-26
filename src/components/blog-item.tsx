'use client'

import Link from 'next/link'
import { Tag } from './tag'
import { TimeToRead } from './time-to-read'
import Image, { type ImageLoaderProps } from 'next/image'

interface Props {
  slug: string
  imageSrc: string
  altImg: string
  tag: string
  title: string
  date: string
  minRead: number
  shortDescription: string
  authorName: string
  authorImg: string
}
export function BlogItem({
  slug,
  imageSrc,
  altImg,
  tag,
  title,
  date,
  minRead,
  shortDescription,
  authorName,
  authorImg,
}: Props) {
  const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width || 1080}&q=${quality || 75}`
  }
  return (
    <Link
      href={`/post/${slug}`}
      className="lg:w-[510px] flex flex-col hover:opacity-95 transition-all hover:scale-105"
      data-testid="link-post"
    >
      <div className="">
        <div className="max-w-[510px] h-[278px]">
          <Image
            loader={imageLoader}
            src={imageSrc}
            width={510}
            height={278}
            alt={altImg}
            data-testid="post-img"
            priority
            className="rounded-md object-cover  transition-all  w-full h-full"
          />
        </div>
        <Tag text={tag} />
      </div>
      <div className="flex flex-col mt-2 max-w-[510px] break-all">
        <h3 className="font-merriweather word">{title}</h3>
        <TimeToRead date={date} timeInMinutes={minRead} />
      </div>
      <div className="text-justify max-w-[510px] my-4">
        <p className="font-roboto">{shortDescription}</p>
      </div>
      <div className="flex gap-[14px] items-center">
        <Image
          loader={imageLoader}
          src={authorImg}
          width={42}
          height={42}
          alt={authorName}
          data-testid="author-img"
          className="rounded-full"
        />
        <p className="font-merriweather">{authorName}</p>
      </div>
    </Link>
  )
}

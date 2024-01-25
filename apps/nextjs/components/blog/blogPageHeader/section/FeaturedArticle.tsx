import Image from 'next/image'
import React from 'react'
import SvgIcon from '@/components/svg-icons'
import { Blog } from '@repo/types/src/blog'
import moment from 'moment'
import { GenMarkDown } from '@/components/GenMarkDown'

export const FeaturedArticle = ({ blog }: { blog?: Blog }) => {
  let date = '-'
  if (blog?.attributes?.publishedAt) {
    const dateObject = moment(blog.attributes.publishedAt)
    date = dateObject.format('DD MMMM YYYY')
  }

  let imageUrl = '/static/images/placeholder.jpg'
  if (blog?.attributes?.image?.data?.attributes?.formats?.medium?.url)
    imageUrl = blog?.attributes?.image?.data?.attributes?.formats?.medium?.url

  let tags = blog?.attributes?.tags?.data || []
  tags = tags.slice(0, 3)

  const contents = blog?.attributes?.content?.split('\n').slice(0, 5).join('\n') || ''

  return (
    <article
      id="featured_article"
      className="flex flex-col items-start gap-spacing-6xl self-stretch sm:gap-spacing-7xl "
    >
      <div
        className="relative flex h-full flex-1 flex-col items-start justify-end gap-spacing-2xl self-stretch overflow-hidden rounded-2xl border-gray-200 dark:border-gray-800 sm:min-h-[720px] sm:gap-8 sm:border"
        id="image"
      >
        {imageUrl ? (
          <div className="relative h-full w-full sm:absolute" id="image_config">
            <Image
              src={imageUrl}
              alt="image"
              sizes="100vw"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              priority
              width={1216}
              height={720}
            />
          </div>
        ) : null}
        <div
          className="inset-x-0 bottom-0 z-20 flex w-full flex-col content-center items-center self-stretch sm:pt-spacing-9xl"
          id="button_panel"
        >
          <div
            className="flex flex-col items-start gap-spacing-4xl self-stretch backdrop-blur-none sm:p-spacing-4xl sm:backdrop-blur-md"
            id="attribution"
          >
            <div className=" flex flex-col items-start gap-spacing-3xl self-stretch" id="container">
              <div className="flex h-10 items-center gap-spacing-md sm:hidden" id="categories">
                <div className="flex items-center" id="badge">
                  <p className="text-sm-semibold text-brand-primary dark:text-brand-primary-dark">
                    {tags[0] && tags[0].attributes?.name}
                  </p>
                </div>
              </div>

              <div
                className="flex h-40 flex-col items-start gap-spacing-md self-stretch"
                id="heading_and_text"
              >
                <div className="flex items-start gap-spacing-xl self-stretch" id="heading_and_icon">
                  <p className="flex-1 text-display-xs-semibold sm:text-white">
                    {blog?.attributes?.title}
                  </p>
                  <SvgIcon
                    kind="arrowUpRight"
                    href="/"
                    size={6}
                    strokColor={'white'}
                    strokWidth={2}
                  />
                </div>
                <GenMarkDown
                  data={contents}
                  className="truncate text-md-regular sm:text-primary-dark"
                />
              </div>
              <div
                className="flex items-start gap-spacing-3xl self-stretch text-white"
                id="author_and_categories"
              >
                <div
                  className="flex flex-1 flex-col items-start gap-spacing-4xl sm:flex-row"
                  id="autor"
                >
                  <div className="flex flex-col items-start gap-spacing-md" id="text_and_autor">
                    <p className="hidden text-sm-semibold sm:block sm:text-white">Written by</p>
                    <div className="flex items-center gap-spacing-lg" id="avatar_label_group">
                      <div
                        className="flex h-10 w-10 content-center items-center rounded-full bg-primary-dark"
                        id="avatar"
                      >
                        <Image
                          src={'/static/images/Avatar_human.png'}
                          alt="image"
                          sizes="100vw"
                          style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                          }}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="flex flex-col gap-spacing-sm sm:flex-row">
                        <p className="text-sm-semibold text-primary dark:text-primary-dark sm:text-white">
                          {blog?.attributes?.author?.data?.attributes?.username}
                        </p>
                        <p className="text-sm-regular text-tertiary dark:text-tertiary-dark sm:hidden sm:text-md-semibold">
                          {date}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hidden flex-col items-start gap-spacing-md sm:flex"
                    id="publish_date"
                  >
                    <p className="text-sm-semibold sm:block">Published on</p>
                    <div className="flex h-[40px] items-center gap-spacing-md py-spacing-md">
                      <p className="text-md-semibold text-primary sm:block sm:text-white">{date}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="hidden flex-col items-start gap-spacing-md sm:flex"
                  id="text_and_date"
                >
                  <p className="text-sm-semibold">File under</p>
                  <div className="flex h-10 items-center gap-spacing-md" id="categories">
                    {tags.map((e, i) => (
                      <div
                        key={i}
                        className="flex items-center rounded-full border-2 border-white px-2.5 py-spacing-xxs"
                        id="badge"
                      >
                        <p className="text-sm-semibold text-brand-primary dark:text-brand-primary-dark">
                          {e.attributes?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

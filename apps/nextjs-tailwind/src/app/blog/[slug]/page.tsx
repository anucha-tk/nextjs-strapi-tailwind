import { getBlog } from '@/actions/blog';
import { GenMarkDown } from '@/components/GenMarkDown';
import { getDate } from '@/lib/date';
import { Image } from '@nextui-org/react';
import React from 'react';
import NextImage from 'next/image';

const Blog = async ({ params }: { params: { slug: string } }) => {
  const { data } = await getBlog({ slug: params.slug, populate: true });

  if (!data.attributes?.content) return null;

  return (
    <article
      id='blog_post_page_header'
      className='container mx-auto flex flex-col items-center'
    >
      <div
        id='header_section'
        className='flex py-spacing-7xl gap-spacing-6xl sm:py-spacing-9xl flex-col sm:gap-spacing-7xl items-center self-stretch'
      >
        <div
          id='container'
          className='flex flex-col items-center self-stretch gap-spacing-4xl px-4 sm:px-8'
        >
          <div
            id='contain'
            className='flex flex-col items-start gap-spacing-4xl self-stretch'
          >
            <div
              id='heading_and_supp'
              className='flex flex-col gap-spacing-3xl items-start self-stretch'
            >
              <div
                id='head_and_supp_head'
                className='flex flex-col items-start gap-spacing-lg self-stretch'
              >
                <p className='text-brand-secondary dark:text-brand-secondary-dark self-stretch text-md-semibold'>
                  {getDate(data.attributes.publishedAt)}
                </p>
                <p className='text-display-lg-semibold text-primary-900'>
                  {data.attributes.title}
                </p>
              </div>
              <p className='text-xl-regular text-tertiary dark:text-tertiary-dark'>
                {data.attributes.author?.data?.attributes?.username}
              </p>
            </div>
          </div>
        </div>
        {data.attributes.image?.data && (
          <div
            id='container_2'
            className='flex flex-col gap-spacing-4xl self-stretch px-8'
          >
            <div
              className='h-full w-full flex justify-center items-center'
              id='image_config'
            >
              <Image
                isZoomed
                as={NextImage}
                src={
                  data.attributes.image?.data?.attributes?.formats?.large?.url
                }
                alt='image'
                sizes='100vw'
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
          </div>
        )}
      </div>
      <div
        id='section'
        className='flex flex-col pb-spacing-7xl sm:pb-spacing-9xl items-center self-stretch gap-spacing-6xl sm:gap-spacing-7xl px-8 sm:px-spacing-none'
      >
        <GenMarkDown
          data={data.attributes?.content}
          className='prose dark:prose-invert'
        />
      </div>
    </article>
  );
};

export default Blog;

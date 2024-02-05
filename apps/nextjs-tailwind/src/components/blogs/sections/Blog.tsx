import SvgIcon from '@/components/svg-icons';
import { getDate } from '@/lib/date';
import { Blog } from '@repo/types/src/blog';
import { slug } from 'github-slugger';
import Image from 'next/image';
import React from 'react';

export default function Blog({ blog }: { blog: Blog }) {
  const contents =
    blog?.attributes?.content?.split('\n').slice(0, 5).join('\n') || '';
  let imageUrl = '/images/placeholder.jpg';
  if (blog?.attributes?.image?.data?.attributes?.formats?.small?.url) {
    imageUrl = blog.attributes.image.data.attributes.formats.small.url;
  }

  return (
    <div className='flex flex-col items-start gap-spacing-2xl self-stretch sm:min-w-[320px] sm:flex-1'>
      {imageUrl ? (
        <div
          className='relative h-[240px] w-full overflow-hidden rounded-2xl'
          id='image_config'
        >
          <Image
            src={imageUrl}
            alt='image'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            quality={50}
            priority
            width={1216}
            height={720}
          />
        </div>
      ) : null}
      <div
        id='content'
        className='flex flex-col items-start gap-spacing-3xl self-stretch'
      >
        <div
          id='heading_and_sup'
          className='flex flex-col items-start gap-spacing-md self-stretch'
        >
          <p
            id='badge'
            className='text-sm-semibold text-brand-secondary dark:text-brand-secondary-dark'
          >
            {blog.attributes?.tags?.data[0].attributes?.name ?? ''}
          </p>
          <div
            id='heading_and_text'
            className='flex flex-col items-start gap-spacing-md self-stretch'
          >
            <div
              id='heading_and_icon'
              className='flex gap-x-spacing-xl self-stretch'
            >
              <p className='flex-1 text-xl-semibold text-primary dark:text-primary-dark'>
                {blog.attributes?.title}
              </p>
              <SvgIcon
                kind='arrowUpRight'
                href={`/blog/${slug(blog?.attributes?.title ?? '')}`}
                className='text-sm sm:text-white'
              />
            </div>
            <p className='text-md-regular'>{contents}</p>
          </div>
        </div>
        <div
          id='avatar_label_group'
          className='flex items-center gap-spacing-lg'
        >
          <div id='text_sup' className='flex flex-col items-start'>
            <p className='text-sm-semibold text-primary dark:text-primary-dark'>
              {blog.attributes?.author?.data?.attributes?.username}
            </p>
            <p className='text-sm-regular text-tertiary dark:text-tertiary-dark'>
              {getDate(blog.attributes?.updatedAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

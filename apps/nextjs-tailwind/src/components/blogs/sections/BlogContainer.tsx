import React from 'react';
import Blog from './Blog';
import { getBlogs } from '@/actions/blog';
import Pagination from '@/components/Pagination';

export default async function BlogContainer({ page }: { page: string }) {
  const blogs = await getBlogs({ populate: true, page: +page });

  return (
    <div className='flex flex-col gap-spacing-7xl sm:hidden '>
      <article
        id='content-mobile'
        className='flex flex-col items-start gap-spacing-6xl self-stretch sm:hidden'
      >
        {blogs?.data.map((e, i) => <Blog blog={e} key={i} />)}
      </article>
      <Pagination pagination={blogs?.meta.pagination} />
    </div>
  );
}

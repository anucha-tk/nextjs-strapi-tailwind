import React from 'react';
import Blog from './Blog';
import { getBlogs } from '@/actions/blog';
import Pagination from '@/components/Pagination';
import { FilterRelation } from '@repo/types/src/strapiQuery';

export default async function BlogContainer({
  page,
  filter,
}: {
  page?: string;
  filter?: string;
}) {
  const filterRelations: FilterRelation[] = [];
  if (filter) {
    filterRelations.push({
      name: 'tags',
      field: 'name',
      operator: '$in',
      value: filter,
    });
  }
  const blogs = await getBlogs({
    populate: true,
    page: page ? +page : 1,
    filterRelations,
  });

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

import Blog from './Blog';
import { getBlogs } from '@/actions/blog';
import { ENUM_BLOG_SIZE } from '@/lib/api/constants/blog.enum.constants';
import Pagination from '@/components/Pagination';
import { Filter } from '@repo/types/src/strapiQuery';

export default async function BlogContainerWeb({
  page,
  filter,
}: {
  page?: string;
  filter?: string;
}) {
  const filters: Filter[] = [];
  if (filter) {
    filters.push({
      name: 'tags',
      field: 'name',
      operator: '$in',
      value: filter,
    });
  }

  const blogs = await getBlogs({
    pageSize: ENUM_BLOG_SIZE.WEB,
    populate: true,
    page: page ? +page : 1,
    filters,
  });

  return (
    <div className='hidden flex-col gap-spacing-7xl sm:flex'>
      <article
        id='content-desktop'
        className='hidden flex-wrap content-start items-start gap-x-spacing-6xl gap-y-spacing-4xl self-stretch sm:flex'
      >
        {blogs?.data.map((e, i) => <Blog blog={e} key={i} />)}
      </article>
      <Pagination pagination={blogs?.meta.pagination} />
    </div>
  );
}

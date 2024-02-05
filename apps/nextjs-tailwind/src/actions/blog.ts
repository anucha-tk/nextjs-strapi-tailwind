'use server';

import apiFetch from '@/lib/api/apiFetch';
import { ENUM_BLOG_SIZE } from '@/lib/api/constants/blog.enum.constants';
import { ENUM_BLOG_URL } from '@/lib/api/constants/url.constants';
import { Blog } from '@repo/types/src/blog';
import { IResponsePaging } from '@repo/types/src/response';
import { FilterRelation } from '@repo/types/src/strapiQuery';
import { revalidatePath } from 'next/cache';

export async function getBlogs({
  page = 1,
  pageSize = ENUM_BLOG_SIZE.MOBILE,
  populate = false,
  filterRelations,
}: {
  page?: number;
  pageSize?: number;
  populate?: boolean;
  filterRelations?: FilterRelation[];
}) {
  revalidatePath('/');
  return apiFetch<IResponsePaging<Blog[]>>({
    endpoint: ENUM_BLOG_URL.BLOGS,
    pagination: {
      page,
      pageSize,
      populate,
      sort: 'createdAt:desc',
    },
    filterRelations,
  });
}

export async function getBlog({
  slug,
  populate = false,
}: {
  slug: string;
  populate?: boolean;
}) {
  return apiFetch<IResponsePaging<Blog>>({
    endpoint: `${ENUM_BLOG_URL.SLUG}/${slug}`,
    pagination: {
      populate,
    },
  });
}

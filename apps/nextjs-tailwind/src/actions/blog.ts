'use server';

import apiFetch from '@/lib/api/apiFetch';
import { ENUM_BLOG_SIZE } from '@/lib/api/constants/blog.enum.constants';
import { ENUM_BLOG_URL } from '@/lib/api/constants/url.constants';
import { Blog } from '@repo/types/src/blog';
import { IResponsePaging } from '@repo/types/src/response';
import { Filter } from '@repo/types/src/strapiQuery';

export async function getBlogs({
  page = 1,
  pageSize = ENUM_BLOG_SIZE.MOBILE,
  populate = false,
  filters,
}: {
  page?: number;
  pageSize?: number;
  populate?: boolean;
  filters?: Filter[];
}) {
  return apiFetch<IResponsePaging<Blog[]>>({
    endpoint: ENUM_BLOG_URL.BLOGS,
    pagination: {
      page,
      pageSize,
      populate,
      sort: 'createdAt:desc',
    },
    filters,
  });
}

'use server';

import apiFetch from '@/lib/api/apiFetch';
import { ENUM_TAG_SIZE } from '@/lib/api/constants/tag.enum.constants';
import { ENUM_TAG_URL } from '@/lib/api/constants/url.constants';
import { IResponsePaging } from '@repo/types/src/response';
import { Tag } from '@repo/types/src/tag';

export async function getTags({
  page = 1,
  pageSize = ENUM_TAG_SIZE.MOBILE,
  populate = false,
}: {
  page?: number;
  pageSize?: number;
  populate?: boolean;
}) {
  revalidatePath('/');
  return apiFetch<IResponsePaging<Tag[]>>({
    endpoint: ENUM_TAG_URL.TAGS,
    pagination: {
      page,
      pageSize,
      populate,
      sort: 'createdAt:desc',
    },
  });
}

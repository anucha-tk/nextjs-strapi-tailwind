import { ENUM_BLOG_URL } from '../constants/url.constants'
import { Blog } from '@repo/types/src/blog'
import { IResponsePaging } from '@repo/types/src/response'
import { axiosInstance } from './axiosInstance'
import { ENUM_BLOG_SIZE } from '../constants/blog.enum.constants'

export const getBlogs = async ({
  page = 2,
  pageSize = ENUM_BLOG_SIZE.MOBILE,
  populate = false,
}: {
  page?: number
  pageSize?: number
  populate?: boolean
}) => {
  const { data } = await axiosInstance.get<unknown, IResponsePaging<Blog[]>>(ENUM_BLOG_URL.BLOGS, {
    params: {
      sort: 'createdAt:desc',
      'pagination[page]': page,
      'pagination[pageSize]': pageSize,
      populate: populate ? '*' : undefined,
    },
  })
  return data
}

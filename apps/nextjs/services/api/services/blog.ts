import { ENUM_BLOG_URL } from '../constants/url.constants'
import { Blog } from '@repo/types/src/blog'
import { IResponsePaging } from '@repo/types/src/response'
import { axiosInstance } from './axiosInstance'

export const getBlogs = async (): Promise<IResponsePaging<Blog[]>> => {
  const data = await axiosInstance.get<unknown, IResponsePaging<Blog[]>>(ENUM_BLOG_URL.BLOGS)
  return data
}

import { ENUM_TAG_URL } from '../constants/url.constants'
import { IResponsePaging } from '@repo/types/src/response'
import { axiosInstance } from './axiosInstance'
import { Tag } from '@repo/types/src/tag'

export const getTags = async () => {
  const { data } = await axiosInstance.get<unknown, IResponsePaging<Tag[]>>(ENUM_TAG_URL.TAGS, {
    params: {
      sort: 'createdAt:desc',
    },
  })
  return data
}

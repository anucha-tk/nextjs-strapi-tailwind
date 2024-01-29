'use client'
import React, { useState } from 'react'
import Blog from './Blog'
import { useQuery } from '@tanstack/react-query'
import { ENUM_QUERY_KEY } from 'services/react-query/constants/query.constants'
import { getBlogs } from 'services/api/services/blog'
import Pagination from './Pagination'
import { ENUM_BLOG_SIZE } from 'services/api/constants/blog.enum.constants'

export default function BlogContainer() {
  const [page, setPage] = useState(1)

  const { data } = useQuery({
    queryKey: [ENUM_QUERY_KEY.BLOGS, ENUM_BLOG_SIZE.MOBILE, page],
    queryFn: () => getBlogs({ page, pageSize: ENUM_BLOG_SIZE.MOBILE, populate: true }),
  })

  if (!data?.data && !data?.meta.pagination) return null

  return (
    <div className="flex flex-col gap-spacing-7xl sm:hidden ">
      <article
        id="content-mobile"
        className="flex flex-col items-start gap-spacing-6xl self-stretch sm:hidden"
      >
        {data?.data.map((e, i) => <Blog blog={e} key={i} />)}
      </article>
      <Pagination pagination={data?.meta.pagination} page={page} setPage={setPage} />
    </div>
  )
}

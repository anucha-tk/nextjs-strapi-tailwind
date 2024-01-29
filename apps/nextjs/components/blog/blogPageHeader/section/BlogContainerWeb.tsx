'use client'
import React, { useState } from 'react'
import Blog from './Blog'
import { useQuery } from '@tanstack/react-query'
import { ENUM_QUERY_KEY } from 'services/react-query/constants/query.constants'
import { getBlogs } from 'services/api/services/blog'
import Pagination from './Pagination'
import { ENUM_BLOG_SIZE } from 'services/api/constants/blog.enum.constants'

export default function BlogContainerWeb() {
  const [page, setPage] = useState(1)

  const { data } = useQuery({
    queryKey: [ENUM_QUERY_KEY.BLOGS, ENUM_BLOG_SIZE.WEB, page],
    queryFn: () => getBlogs({ page, pageSize: ENUM_BLOG_SIZE.WEB, populate: true }),
  })

  if (!data?.data && !data?.meta.pagination) return null

  return (
    <div className="hidden flex-col gap-spacing-7xl sm:flex">
      <article
        id="content-desktop"
        className="hidden flex-wrap content-start items-start gap-x-spacing-6xl gap-y-spacing-4xl self-stretch sm:flex"
      >
        {data?.data.map((e, i) => <Blog blog={e} key={i} />)}
      </article>
      <Pagination pagination={data?.meta.pagination} page={page} setPage={setPage} />
    </div>
  )
}

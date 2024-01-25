import React from 'react'
import { FeaturedArticle } from './section/FeaturedArticle'
import { HeaderSection } from './HeaderSection'
import useGetBlogs from '../hooks/getBlogs'

export const BlogPageHeader = () => {
  const { data } = useGetBlogs()

  return (
    <section className="flex flex-col items-center self-stretch" id="blog_page_header">
      <HeaderSection />
      <section className="flex flex-col items-center gap-spacing-6xl self-stretch pb-16 sm:gap-16 sm:pb-24">
        <div
          className="flex flex-col items-start gap-spacing-7xl self-stretch px-4 sm:px-8"
          id="container"
        >
          <FeaturedArticle blog={data?.data.data[0]} />
          <div id="tabs_and_sort"></div>
          <article id="content"></article>
          <div id="pagination"></div>
        </div>
      </section>
    </section>
  )
}

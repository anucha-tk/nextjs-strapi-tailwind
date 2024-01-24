import React from 'react'
import { FeaturedArticle } from './FeaturedArticle'
import { HeaderSection } from './HeaderSection'

export const BlogPageHeader = () => {
  return (
    <section className="flex flex-col items-center self-stretch" id="blog_page_header">
      <HeaderSection />
      <article className="flex flex-col items-center gap-16 self-stretch pb-24">
        <div
          className="flex max-w-7xl flex-col items-start gap-spacing-7xl self-stretch px-8"
          id="container"
        >
          <FeaturedArticle />
          <div id="tabs_and_sort"></div>
          <article id="content"></article>
          <div id="pagination"></div>
        </div>
      </article>
    </section>
  )
}

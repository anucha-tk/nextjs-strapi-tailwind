import { FeaturedArticle } from './section/FeaturedArticle'
import { HeaderSection } from './HeaderSection'
import { TabsAndSort } from './section/TabsAndSort'
import BlogContainer from './section/BlogContainer'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { ENUM_QUERY_KEY } from 'services/react-query/constants/query.constants'
import { getBlogs } from 'services/api/services/blog'
import { ENUM_BLOG_SIZE } from 'services/api/constants/blog.enum.constants'
import BlogContainerWeb from './section/BlogContainerWeb'
import { getTags } from 'services/api/services/tag'

export const BlogPageHeader = async () => {
  const queryClient = new QueryClient()

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [ENUM_QUERY_KEY.BLOGS, ENUM_BLOG_SIZE.MOBILE, 1],
      queryFn: () => getBlogs({ page: 1, pageSize: ENUM_BLOG_SIZE.MOBILE, populate: true }),
    }),
    queryClient.prefetchQuery({
      queryKey: [ENUM_QUERY_KEY.BLOGS, ENUM_BLOG_SIZE.WEB, 1],
      queryFn: () => getBlogs({ page: 1, pageSize: ENUM_BLOG_SIZE.WEB, populate: true }),
    }),
    queryClient.prefetchQuery({
      queryKey: [ENUM_QUERY_KEY.TAGS],
      queryFn: getTags,
    }),
  ])

  return (
    <section className="flex flex-col items-center self-stretch" id="blog_page_header">
      <HeaderSection />
      <section className="flex flex-col items-center gap-spacing-6xl self-stretch pb-16 sm:gap-16 sm:pb-24">
        <div
          className="flex flex-col items-start gap-spacing-6xl self-stretch px-4 sm:gap-spacing-7xl sm:px-8"
          id="container"
        >
          <HydrationBoundary state={dehydrate(queryClient)}>
            <FeaturedArticle />
            <TabsAndSort />
            <BlogContainer />
            <BlogContainerWeb />
          </HydrationBoundary>
        </div>
      </section>
    </section>
  )
}

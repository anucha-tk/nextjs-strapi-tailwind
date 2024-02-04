import { HeaderSection } from './BlogHeader';
import { FeaturedArticle } from './sections/FeatureArticle';
import { TabsAndSort } from './sections/TabsAndSort';
// import BlogContainer from './section/BlogContainer'
// import BlogContainerWeb from './section/BlogContainerWeb'

const BlogPageHeader = () => {
  return (
    <section
      className='flex flex-col items-center self-stretch'
      id='blog_page_header'
    >
      <HeaderSection />
      <section className='flex flex-col items-center gap-spacing-6xl self-stretch pb-16 sm:gap-16 sm:pb-24'>
        <div
          className='flex flex-col items-start gap-spacing-6xl self-stretch px-4 sm:gap-spacing-7xl sm:px-8'
          id='container'
        >
          <FeaturedArticle />
          <TabsAndSort />
          {/* <BlogContainer /> */}
          {/* <BlogContainerWeb /> */}
        </div>
      </section>
    </section>
  );
};
export default BlogPageHeader;

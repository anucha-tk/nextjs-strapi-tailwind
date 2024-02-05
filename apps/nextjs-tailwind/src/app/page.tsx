import BlogPageHeader from '@/components/blogs/BlogPageHeader';

export default function HomePage({
  searchParams,
}: {
  searchParams: { page?: string; 'filter[tag]'?: string };
}) {
  return (
    <main>
      <BlogPageHeader
        page={searchParams.page ?? '1'}
        filter={searchParams['filter[tag]']}
      />
    </main>
  );
}

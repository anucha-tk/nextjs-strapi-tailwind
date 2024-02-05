import BlogPageHeader from '@/components/blogs/BlogPageHeader';

export default function HomePage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <main>
      <BlogPageHeader page={searchParams.page ?? '1'} />
    </main>
  );
}

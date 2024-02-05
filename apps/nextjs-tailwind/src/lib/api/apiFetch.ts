import { PaginationQuery } from '@repo/types/src/strapi-query';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_JWT_TOKEN;

const apiFetch = async <T>({
  endpoint,
  pagination,
}: {
  endpoint: string;
  pagination?: PaginationQuery;
}): Promise<T> => {
  const urlWithParams = new URL(endpoint, BASE_URL);

  const params = new URLSearchParams();
  if (pagination?.page) params.set('pagination[page]', pagination.page + '');
  if (pagination?.pageSize)
    params.set('pagination[pageSize]', pagination.pageSize + '');
  if (pagination?.sort) params.set('sort', pagination.sort);
  if (pagination?.populate) params.set('populate', '*');

  urlWithParams.search = params.toString();

  try {
    const response = await fetch(urlWithParams.href, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return response.json();
  } catch (error) {
    throw error;
  }
};

export default apiFetch;

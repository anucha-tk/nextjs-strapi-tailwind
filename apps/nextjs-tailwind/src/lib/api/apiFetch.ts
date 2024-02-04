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
  const params: Record<string, string> = {};
  if (pagination?.page)
    Object.assign(params, { 'pagination[page]': pagination.page });
  if (pagination?.pageSize)
    Object.assign(params, { 'pagination[pageSize]': pagination.pageSize });
  if (pagination?.sort) Object.assign(params, { sort: pagination.sort });
  if (pagination?.populate) Object.assign(params, { populate: '*' });
  if (pagination?.limit) Object.assign(params, { limit: pagination.limit });

  const urlWithParams = new URL(endpoint, BASE_URL);
  urlWithParams.search = new URLSearchParams(params).toString();

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

import {
  PaginationQuery,
  Filter,
  FilterRelation,
} from '@repo/types/src/strapiQuery';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_JWT_TOKEN;

const apiFetch = async <T>({
  endpoint,
  pagination,
  filters,
  filterRelations,
}: {
  endpoint: string;
  pagination?: PaginationQuery;
  filters?: Filter[];
  filterRelations?: FilterRelation[];
}): Promise<T> => {
  const urlWithParams = new URL(endpoint, BASE_URL);

  let params = new URLSearchParams();
  if (pagination?.page) params.set('pagination[page]', pagination.page + '');
  if (pagination?.pageSize)
    params.set('pagination[pageSize]', pagination.pageSize + '');
  if (pagination?.sort) params.set('sort', pagination.sort);
  if (pagination?.populate) params.set('populate', '*');

  if (filters && filters.length > 0) {
    for (const filter of filters) {
      params.set(`filters[${filter.field}][${filter.operator}]`, filter.value);
    }
  }

  if (filterRelations && filterRelations.length > 0) {
    for (const filterRelation of filterRelations) {
      params.set(
        `filters[${filterRelation.name}][${filterRelation.field}][${filterRelation.operator}]`,
        filterRelation.value,
      );
    }
  }
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

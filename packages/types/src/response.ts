export type IResponsePaging<T> = {
  data: T;
  meta: {
    pagination: Pagination;
  };
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

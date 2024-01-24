export type IResponsePaging<T> = {
  data: {
    data: T;
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  };
};

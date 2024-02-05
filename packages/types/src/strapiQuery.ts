export type PaginationQuery = {
  page?: number;
  pageSize?: number;
  limit?: number;
  populate?: boolean;
  sort?: string;
};

export type Filter = {
  name: string;
  field: string;
  operator: FILTER_OPERATOR;
  value: string;
};

export type FILTER_OPERATOR = "$eq" | "$in";

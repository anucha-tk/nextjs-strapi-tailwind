export type PaginationQuery = {
  page?: number;
  pageSize?: number;
  limit?: number;
  populate?: boolean;
  sort?: string;
};

export type Filter = {
  field: string;
  operator: FILTER_OPERATOR;
  value: string;
};

export type FilterRelation = Filter & {
  name: string;
};

export type FILTER_OPERATOR = "$eq" | "$in";

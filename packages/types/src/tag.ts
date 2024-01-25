export type Tag = {
  id?: number;
  attributes?: {
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
  };
};

export type TagsResponse = {
  data: Tag[];
};

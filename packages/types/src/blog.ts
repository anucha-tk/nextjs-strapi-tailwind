import { TagsResponse } from "./tag";

export type Blog = {
  id?: number;
  attributes?: {
    title?: string;
    content?: [
      {
        type?: string;
        children?: [
          {
            text?: string;
            type?: string;
          },
        ];
      },
    ];
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
    tags?: TagsResponse;
    author?: Author;
    image?: Image;
  };
};

export type Author = {
  data?: {
    id?: number;
    attributes?: {
      username?: string;
      email?: string;
      provider?: null;
      confirmed?: boolean;
      blocked?: boolean;
      createdAt?: Date;
      updatedAt?: Date;
    };
  };
};

export type Image = {
  data?: {
    id?: number;
    attributes?: {
      name?: string;
      alternativeText?: null;
      caption?: null;
      width?: number;
      height?: number;
      formats?: {
        large?: ImageFormat;
        small?: ImageFormat;
        medium?: ImageFormat;
        thumbnail?: ImageFormat;
      };
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: null;
      provider?: string;
      provider_metadata?: {
        public_id?: string;
        resource_type?: string;
      };
      createdAt?: Date;
      updatedAt?: Date;
    };
  };
};

export type ImageFormat = {
  ext?: string;
  url?: string;
  hash?: string;
  mime?: string;
  name?: string;
  path?: null;
  size?: number;
  width?: number;
  height?: number;
  provider_metadata?: {
    public_id?: string;
    resource_type?: string;
  };
};

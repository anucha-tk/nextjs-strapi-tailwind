export type Blog = {
  id: number;
  attributes: {
    title: string;
    content: [
      {
        type: string;
        children: [
          {
            text: string;
            type: string;
          },
        ];
      },
    ];
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    tag: string;
    author: Author;
  };
};

export type Author = {
  data: {
    id: number;
    attributes: {
      username: string;
      email: string;
      provider: null;
      confirmed: boolean;
      blocked: boolean;
      createdAt: Date;
      updatedAt: Date;
    };
  };
};

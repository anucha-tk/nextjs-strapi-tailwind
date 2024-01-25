import { faker } from "@faker-js/faker";
import chalk from "chalk";
import { findSeedUser } from "./user";
import { findSeedTags } from "./tag";

export const generateBlogData = async (strapi: any) => {
  console.log(chalk.green("generating blogs"));

  const { DEV_SEED_DATA_BLOGS } = process.env;
  const blogsSize = DEV_SEED_DATA_BLOGS ? parseInt(DEV_SEED_DATA_BLOGS) : 5;
  console.log("blogs size", chalk.bold.bgCyan.black(blogsSize));

  const seedUserIds = await findSeedUser(strapi);
  const seedTagIds = await findSeedTags(strapi);

  const bulkBlogPromises = [];
  const randomBlogsData = new Array(blogsSize)
    .fill(null)
    .map(() => _randomBlog(seedUserIds, seedTagIds));

  for (const randomBlogData of randomBlogsData) {
    const randomBlogPromise = strapi.entityService.create("api::blog.blog", {
      data: {
        ...randomBlogData,
      },
    });
    bulkBlogPromises.push(randomBlogPromise);
  }

  await Promise.all(bulkBlogPromises);
};

const _randomBlog = (seedUserIds: number[], seedTagIds: number[]) => {
  const content = [
    {
      type: "paragraph",
      children: [
        { text: faker.lorem.paragraph(), type: "text" },
        { text: faker.lorem.paragraph(), type: "text" },
        { text: faker.lorem.paragraph(), type: "text" },
      ],
    },
  ];
  return {
    title: faker.lorem.words(3),
    content,
    publishedAt: faker.date.recent(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    author: faker.helpers.arrayElement(seedUserIds),
    tags: faker.helpers.arrayElements(seedTagIds, 3),
  };
};

import { faker } from "@faker-js/faker";
import chalk from "chalk";

export const blogTags = [
  "JavaScript",
  "React",
  "Node.js",
  "Web Development",
  "Programming",
  "Frontend",
  "Backend",
  "Tech News",
  "Software Engineering",
  "Design Patterns",
];

export const createSeedTags = async (strapi: any) => {
  console.log(chalk.green("generate tags..."));

  for (let i = 0; i < blogTags.length; i++) {
    await strapi.entityService.create("api::tag.tag", {
      data: {
        name: blogTags[i],
        publishedAt: faker.date.recent(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      },
    });
  }
  console.log(chalk.green("generate tags success"));
};

export const findSeedTags = async (strapi: any): Promise<number[]> => {
  console.log(chalk.green("find tagsId..."));
  const seedTags = await strapi.entityService.findMany("api::tag.tag");

  const ids = seedTags.map((e: any) => e.id);
  return ids;
};

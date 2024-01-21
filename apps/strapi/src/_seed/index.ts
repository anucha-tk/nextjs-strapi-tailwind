import chalk from "chalk";
import { createSeedUsers, seedUserExists } from "./user";
import { clearData } from "./helpers";
import { generateBlogData } from "./blog";

export const generateSeedData = async (strapi: any) => {
  const dataExists = await seedUserExists(strapi);
  const forceBootstrap = process.env.FORCE_APP_BOOTSTRAP_ONLY === "true";

  const skipGeneration = dataExists > 0 && !forceBootstrap;

  if (skipGeneration) {
    console.log(chalk.bgYellow.black.bold("skipping seed data generation..."));
    return;
  }

  if (forceBootstrap) {
    console.log(chalk.red("forcing seed data re-creation..."));
    await clearData(strapi);
    console.log(chalk.red("existing data has been cleaned!"));
  }

  console.log(chalk.magenta("generating seed data..."));

  await createSeedUsers(strapi);

  await Promise.all([generateBlogData(strapi)]).catch((e) => {
    console.error(
      chalk.bold.white.bgRed(
        "error during generating seed data! Stopping the application...",
      ),
    );
    throw new Error(e);
  });

  console.log(
    chalk.bgGreen.black.bold(
      "generating seed data has been finished successfully!",
    ),
  );
};

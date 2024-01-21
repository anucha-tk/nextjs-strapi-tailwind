import chalk from "chalk";

const ensurePostgres = (strapi: any) => {
  console.log(chalk.magenta("verifying db as Postgres"));
  const db: { config: { connection: { client: string } } } = strapi.db as any; // from debugging

  if (db.config.connection.client !== "postgres") {
    throw new Error(
      "strapi is NOT using local Postgres! Please, verify usage of Postges before clearing data",
    );
  }
};
export const clearData = async (strapi: any) => {
  ensurePostgres(strapi);

  const collectionTypeUids = [
    "api::blog.blog",
    "plugin::users-permissions.user",
  ];
  const bulkClears = [];

  for (const collectionTypeUid of collectionTypeUids) {
    const collectionClear = strapi.query(collectionTypeUid).deleteMany({
      where: {
        id: {
          $notNull: true,
        },
      },
    });

    bulkClears.push(collectionClear);
  }

  await Promise.all(bulkClears);
};

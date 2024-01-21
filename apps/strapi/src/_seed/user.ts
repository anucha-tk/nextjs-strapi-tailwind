export const SEED_USERNAME = "seed_user";

/**
 * Using Users collection as main indicator if we have generated seed data before
 */
export const seedUserExists = async (strapi: any): Promise<number> => {
  const seedUser = await strapi.entityService.findMany(
    "plugin::users-permissions.user",
    {
      filters: {
        username: SEED_USERNAME,
      },
    },
  );
  return seedUser.length;
};

/**
 * Creating user that will be an indicator for method `seedUserExists`
 *
 * cannot be used for login, such as lacks full functionality with JWT
 * for more info how to create valid user via API, checkout the source-code:
 * https://github.com/strapi/strapi/blob/master/packages/plugins/users-permissions/server/controllers/auth.js#L239
 */
export const createSeedUsers = async (strapi: any) => {
  const now = Date.now();

  for (let i = 0; i < 5; i++) {
    await strapi.entityService.create("plugin::users-permissions.user", {
      data: {
        username: `${SEED_USERNAME}-${i}`,
        password: `${SEED_USERNAME}-${i}-${now}`,
        email: `${SEED_USERNAME}-${i}@test.com`,
        confirmed: true,
      },
    });
  }
};

export const findSeedUser = async (strapi: any): Promise<number[]> => {
  const seedUsers = await strapi.entityService.findMany(
    "plugin::users-permissions.user",
    {
      filters: {
        username: {
          $startsWith: SEED_USERNAME,
        },
      },
    },
  );
  const ids = seedUsers.map((e: any) => e.id);
  return ids;
};

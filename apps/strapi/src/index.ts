import chalk from "chalk";
import { generateSeedData } from "./_seed";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: any }) {
    console.log(chalk.magenta("running App bootstrap..."));
    if (process.env.NODE_ENV === "development") {
      console.log(chalk.magenta("the App is in the development mode!"));
      console.log(chalk.magenta("running the development bootstrap..."));

      await generateSeedData(strapi);

      // other DEVELOPMENT bootstrap functions
    }

    // general bootstrap functions

    console.log(chalk.magenta("bootstrap function has finished successfully!"));

    if (process.env.FORCE_APP_BOOTSTRAP_ONLY === "true") {
      console.log(
        chalk.bgRed.black(
          "FORCE_APP_BOOTSTRAP_ONLY mode has been activated - exiting process prematurely.",
        ),
      );
      process.exit(0);
    }
  },
};

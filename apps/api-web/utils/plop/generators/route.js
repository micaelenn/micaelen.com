const slugify = require("slugify");

module.exports = (plop) => {
  plop.setGenerator("route", {
    description: "Generate a new route, mapping and controller files.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: `What is the name of the endpoint?`,
        suffix: " (separate words by dash or space)".gray,
        validate: (input) => {
          const pattern = new RegExp(/^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ0-9-\s]+$/);
          const message = `Should contain only letters, digits and dashes, and must start with a letter`.red;
          return pattern.test(input) ? true : message;
        },
        filter: (input) => {
          return slugify(input, {
            lower: true,
            strict: true,
          });
        },
      },
    ],
    actions: () => {
      const actions = [];

      // ADD
      actions.push({
        type: "add",
        templateFile: "./utils/plop/templates/route/controller.hbs",
        path: "./controllers/{{ camelCase name }}.controller.ts",
      });

      // MODIFY
      actions.push({
        type: "modify",
        pattern: /(\/\/ Internal modules)/g,
        templateFile: "./utils/plop/templates/route/import-route.hbs",
        path: "./configs/routes.ts",
      });

      actions.push({
        type: "modify",
        pattern: /(\/\/ Routes)/g,
        templateFile: "./utils/plop/templates/route/use-route.hbs",
        path: "./configs/routes.ts",
      });

      return actions;
    },
  });
};

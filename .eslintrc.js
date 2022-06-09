module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-nathan-test`
  extends: ["nathan-test"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};

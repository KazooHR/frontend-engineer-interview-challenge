require("ts-node/register/transpile-only");

// Note: this violates the monorepo dependency tree because it's not intended to
// be used in runtime code. We need all of the code in disk to build our storybook
// instance, and we don't want to have to redeclare webpack configs. Without
// declaring circular dependencies (or worse, a whole other API just for storing
// shared webpack config), we cheat a little by doing an old-school commonJS
// require.
const { getWebpackConfig } = require("../../webpack/src/webpackConfig");

module.exports = {
  core: {
    builder: {
      name: "webpack5",
      options: {
        fsCache: true,
      },
    },
  },
  webpackFinal: async (config) => {
    const webpackConfig = getWebpackConfig();

    // We need to remove the storybook css rule because it causes problems
    const baseCssRuleIndex = config.module.rules.findIndex((rule) => {
      return rule.test.toString() === "/\\.css$/";
    });
    config.module.rules.splice(baseCssRuleIndex, 1);

    config.resolve.extensions.push(...webpackConfig.resolve.extensions);
    config.module.rules.push(...webpackConfig.module.rules);
    config.plugins.push(...webpackConfig.plugins);

    return config;
  },
  stories: ["../../confetti/**/*.stories.@(mdx|ts|tsx|js|jsx)"],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
  ],
};

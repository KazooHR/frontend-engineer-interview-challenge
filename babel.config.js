/**
 * NOTE: This is required for jest to transform and run our tests.
 */

/* istanbul ignore file */
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/proposal-class-properties", { loose: true }],
  ],
};

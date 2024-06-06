// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  workerIdleMemoryLimit: "900M",
  transformIgnorePatterns: ["/node_modules/"],
  coveragePathIgnorePatterns: [
    ".*\\.testHelper\\..*",
    ".*/(build|dist)/.*",
    ".*/\\.storybook/.*",
    ".*/docs/.*",
    ".*\\.stories\\..*",
    "\\.d\\.ts",
    "packages/webpack",
  ],
  collectCoverageFrom: ["packages/**/*.{js,jsx,ts,tsx}"],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "d.ts", "tsx"],
  moduleNameMapper: {
    "^(.*)(\\.s?css)$": "babel-jest",
  },
  coverageThreshold: {
    global: {
      branches: 100,
      lines: 100,
      statements: 100,
    },
  },
  testTimeout: 1000,
  reporters: [
    "default",
    ["jest-junit", { usePathForSuiteName: "true", addFileAttribute: "true" }],
  ],
};

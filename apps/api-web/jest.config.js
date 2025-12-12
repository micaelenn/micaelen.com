const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",

  transform: {
    ...tsJestTransformCfg,
  },
  transformIgnorePatterns: ["node_modules/(?!(?:@sanity|nanoid)/)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  extensionsToTreatAsEsm: [".ts"],
};

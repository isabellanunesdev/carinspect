/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.css$": "<rootDir>/jest-transformers/cssTransform.js",
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "\\.(css|less|sass|scss)$": "<rootDir>/jest-transformers/cssTransform.js",
  },
  modulePathIgnorePatterns: ["<rootDir>/tests/"],
};

module.exports = config;

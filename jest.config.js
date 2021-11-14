module.exports = {
  testPathIgnorePatterns: ["/node-modules/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts",
    "@testing-library/jest-dom/extend-expect",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "src/**/*.{tsx}",
    "!src/**/*.spec.{tsx}",
    "!**/node_modules/**",
  ],
  coverageReporters: ["lcov", "json"],
};

module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/client/src", "<rootDir>/server/src"],
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/client/src/setupTests.js"]
};

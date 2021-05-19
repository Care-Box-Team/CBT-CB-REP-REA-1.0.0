module.exports = {
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(scss|png)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>src/setupTests.js"],
};

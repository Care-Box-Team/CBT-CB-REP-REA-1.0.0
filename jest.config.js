module.exports = {
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(scss|png|svg)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>src/setupTests.js"],
};

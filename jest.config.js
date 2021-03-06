module.exports = {
  testEnvironment: "jsdom",
  setupFiles: ["dotenv-flow/config"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
    ".+\\.(css|styl|less|sass|scss|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|avif)$":
      "jest-transform-stub",
  },
  testPathIgnorePatterns: ["/node_modules/"],
  testMatch: ["**/tests/unit/**/*.(unit|test|spec).js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  coverageDirectory: `reports/unit-reports/coverage`,
  coverageReporters: ["html", "text-summary", "cobertura"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: `reports/unit-reports/tests`,
        outputName: "junit.xml",
      },
    ],
  ],
};

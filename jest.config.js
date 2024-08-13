const config = {
  transform: {
    "^.+\\.tsx?$": [
      "@swc/jest",
      {
        jsc: {
          target: "es2019"
        }
      }
    ]
  },
  collectCoverageFrom: ["**/*.ts", "!**/node_modules/**", "!**/vendor/**"]
};

export default config;

// eslint.config.js
/** @type {import("eslint").Linter.Config} */
module.exports = {
  // Ignore patterns for monorepo structure
  ignorePatterns: ["apps/**", "packages/**"],
  
  // Extend from a workspace-shared ESLint config
  extends: ["@workspace/eslint-config/base.js"],
  
  // Use TypeScript parser
  parser: "@typescript-eslint/parser",
  
  // Parser options for TypeScript
  parserOptions: {
    project: true, // Enables type-aware linting with tsconfig.json
  },
};
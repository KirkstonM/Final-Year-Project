// .eslintrc.js
module.exports = {
    root: true, // Ensure this is the root ESLint config file
    parserOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module", // Enable ES module syntax (for import/export)
      ecmaFeatures: {
        jsx: true, // Allow JSX (used in React)
      },
    },
    env: {
      browser: true, // For React (frontend)
      node: true, // For Node.js (backend)
      es2020: true, // Allow ES2020 features
    },
    extends: [
      "eslint:recommended", // Base ESLint recommended rules
      "plugin:react/recommended", // React-specific rules
      "plugin:node/recommended", // Node.js-specific rules
      "plugin:prettier/recommended", // Integrate Prettier with ESLint
    ],
    rules: {
      // Custom rules can go here
      "prettier/prettier": ["error"], // Force Prettier formatting rules to be followed
      "react/prop-types": "off", // Example: Disable prop-types if using TypeScript
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  };
  
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["svelte3"],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
    },
    {
      files: [".eslintrc.{js,cjs}"],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "svelte3/ignore-styles": () => true,
    // Optionally ignore warnings for missing dependencies if you use TypeScript and your project uses TypeScript paths:
    // "svelte3/typescript": require("typescript")
  },
  rules: {
    // Add your custom rules here
  },
};

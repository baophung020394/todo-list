module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier", // Đảm bảo rằng Prettier tích hợp tốt với ESLint
  ],
  plugins: ["react", "@typescript-eslint", "jsx-a11y"],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "jsx-a11y/anchor-is-valid": "warn",
    "react/react-in-jsx-scope": "off",
    "no-console": "warn",
    "no-debugger": "warn",
    "prettier/prettier": "error",
  },
};

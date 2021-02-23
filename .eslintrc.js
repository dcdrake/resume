module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended', // always (set of rules recommended by ESLint team)
    'plugin:@typescript-eslint/recommended', // TypeScript
    'prettier/@typescript-eslint', // TypeScript
    'plugin:vue/essential', // Vue
    'prettier', // always
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};

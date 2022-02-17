module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'jsx-a11y/rule-name': 2,
  },
  extends: ['plugin:jsx-a11y/recommended'],
};

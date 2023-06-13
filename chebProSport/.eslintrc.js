module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base/legacy',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser:'@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['prettier','@typescript-eslint'],
  ignorePatterns: ['bundle.js', '.eslintrc.js', 'webpack.config.js'],
  rules: {
    'import/extensions': 'off',
    'prettier/prettier': 'error'
  },
};

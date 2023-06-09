module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    // "linebreak-style": ["error", "unix"],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    eqeqeq: 'error',
    'no-trailing-spaces': ['error'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 0,
  },
};

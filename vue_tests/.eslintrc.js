// .eslintrc.js
module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    jest: true, // Adiciona suporte global para Jest
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
  ],
  parser: 'babel-eslint',
  rules: {
    // suas regras personalizadas
  },
};

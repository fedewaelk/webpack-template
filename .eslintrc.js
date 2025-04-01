module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended", // Esto activa eslint-plugin-prettier y eslint-config-prettier
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    // Aquí puedes agregar o modificar reglas según tus necesidades
  },
};

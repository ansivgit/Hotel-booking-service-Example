module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  ignorePatterns: [
    'webpack.config.js',
    '00trash/',
    'dist/',
    'node_modules/',
  ],
  rules: {
    //"no-console": off,
    "indent": ["error", 2],
    "semi": "error",
    "no-unused-vars": "warn",
    "linebreak-style": ["error", "windows"],
    /*"prefer-arrow-callback": ["off", { "allowNamedFunctions": true }],
    "eol-last": ["error", "never"],
    "func-names": ["off", "as-needed"],*/
    "func-style": ["off", "declaration"],
  },
};

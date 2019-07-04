module.exports = {
  root: true,
  extends: 'jw397',
  plugins: [
    'vuefix',
    'html'
  ],
  parser: "babel-eslint",
  // add your custom rules here
  rules: {},
  globals: {
    '$l': true
  },
  env: {
    jquery: true
  }
};

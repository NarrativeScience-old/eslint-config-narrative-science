module.exports = {
  extends: [
    'eslint-config-airbnb',
    './customRules',
  ].map(require.resolve),
  rules: {}
};

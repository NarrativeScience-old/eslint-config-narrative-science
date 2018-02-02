module.exports = {
  rules: {
    'babel/object-shorthand': 'warn',
    'babel/object-shorthand': 0,
    'brace-style': ['error', '1tbs', {'allowSingleLine': false}],
    'camelcase': 0,
    'class-methods-use-this': 0,
    'comma-dangle': ['warn', 'only-multiline'],
    'consistent-return': 'off',
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-default': 'off',
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-constant-condition': ['error', {'checkLoops': false}],
    'no-extra-parens': 'warn',
    'no-restricted-properties': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': ['error', { 'allowTernary': true }],
    'prefer-template': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 'off',
    'semi': ['error', 'never']
  },
  globals: {
    'document': true,
    'fetch': true,
    'window': true
  }
};

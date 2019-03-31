module.exports = {
  extends: [
    'tslint:latest',
    'tslint-microsoft-contrib/latest',
    'tslint-config-prettier',
  ],
  rules: {
    // tslint
    'array-type': [true, 'array'],
    'max-classes-per-file': false,
    'member-access': false,
    'no-console': false,
    'no-submodule-imports': false,
    'object-literal-shorthand': false,
    'ordered-imports': false,
    'prefer-for-of': false,
    'prefer-template': false,

    // tslint-microsoft-contrib
    'export-name': false,
    'function-name': false,
    'import-name': false,
    'missing-jsdoc': false,
    'no-http-string': false,
    'no-relative-imports': false,
  },
  defaultSeverity: 'warning',
};

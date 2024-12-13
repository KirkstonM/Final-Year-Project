// commitlint.config.js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        ['feat', 'fix', 'docs', 'chore', 'style', 'refactor', 'ci', 'test', 'build', 'merge', 'revert'],
      ],
      'type-case': [2, 'always', 'lower-case'],
      'subject-case': [2, 'always', 'sentence-case'],
      'subject-empty': [2, 'never'],
      'header-max-length': [2, 'always', 100],
    },
  };
  
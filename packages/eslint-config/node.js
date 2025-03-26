/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/node'],
  plugins: ['simple-import-sort'],
  overrides: [
    {
      files: ['./src/configs/env.config.ts', './src/container.ts'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            ...require('./prettier'),
            printWidth: 130,
          },
        ],
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        ...require('./prettier'),
      },
    ],
    'simple-import-sort/imports': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'off',
    'no-useless-constructor': 'off',
  },
};

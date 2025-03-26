/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@rocketseat/eslint-config/react',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['simple-import-sort'],
  overrides: [
    {
      files: [
        'library.js',
        'next.js',
        'node.js',
        'tsup.config.js',
        'vitest.config.js',
        'vitest.workspace.js',
      ],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
    {
      files: ['src/components/ui/*'],
      rules: {
        'tailwindcss/no-custom-classname': 'off',
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
    'tailwindcss/no-custom-classname': 'off',
  },
};

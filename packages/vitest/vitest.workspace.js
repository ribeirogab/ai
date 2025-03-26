const { defineWorkspace } = require('vitest/config');

/** @type {import('vitest/config').WorkspaceProjectConfiguration[]} */
const config = [
  {
    extends: 'vitest.config.js',
    test: {
      include: ['**/*.spec.ts'],
      name: 'unit',
      environment: 'node',
    },
  },
  {
    extends: 'vitest.config.js',
    test: {
      include: ['**/*.test.ts'],
      name: 'integration',
      environment: 'node',
    },
  },
];

module.exports = { defineWorkspace, config };

import { defineWorkspace } from 'vitest/config';

/** @type {import('vitest/config').WorkspaceProjectConfiguration[]} */
const config = [
  {
    extends: 'vitest.config.mjs',
    test: {
      include: ['**/*.spec.ts'],
      name: 'unit',
      environment: 'node',
    },
  },
  {
    extends: 'vitest.config.mjs',
    test: {
      include: ['**/*.test.ts'],
      name: 'integration',
      environment: 'node',
    },
  },
];

export { defineWorkspace, config };

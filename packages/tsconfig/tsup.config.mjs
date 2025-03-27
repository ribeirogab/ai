import { defineConfig } from 'tsup';

/** @type {import('tsup').Options | import('tsup').Options[]} */
const config = {
  entry: ['src', '!src/**/*.spec.*', '!src/**/*.test.*'],
  outDir: 'build',
  splitting: false,
  sourcemap: true,
  clean: true,
  noExternal: [
    '@repo/definitions',
    '@repo/eslint-config',
    '@repo/lib',
    '@repo/tsconfig',
    '@repo/vitest',
  ],
};

export { defineConfig, config };

import { defineConfig, type Options } from 'tsup';

export const config: Options | Options[] = {
  entry: ['src', '!src/**/*.spec.*', '!src/**/*.test.*'],
  splitting: false,
  sourcemap: true,
  clean: true,
  noExternal: [
    '@repo/definitions',
    '@repo/tsconfig',
    '@repo/eslint-config',
    '@repo/vitest',
  ],
};

export { defineConfig };

import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';

/** @type {import('vitest/config').ViteUserConfig} */
const config = {
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    forceRerunTriggers: [...configDefaults.forceRerunTriggers, '**/src/**'],
    exclude: [...configDefaults.exclude],
    coverage: {
      reportsDirectory: './test-output/coverage',
      reporter: ['cobertura', 'lcov'],
      provider: 'v8',
    },
    env: {},
  },
};

export { defineConfig, config };

const tsconfigPaths = require('vite-tsconfig-paths').default;
const { configDefaults, defineConfig } = require('vitest/config');

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

module.exports = { defineConfig, config };

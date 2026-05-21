import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  test: {
    globals: false,
    include: ['exercises/**/*.test.js'],
    environment: 'happy-dom',
    setupFiles: ['./scripts/exercise-sync/vitest-setup.js'],
  },
});

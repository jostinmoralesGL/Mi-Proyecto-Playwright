import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'Tests',
  testMatch: ['**/*.ts', '**/*.js'],
  reporter: [['html', { open: 'never' }]],
});
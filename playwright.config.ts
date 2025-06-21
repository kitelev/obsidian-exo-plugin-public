import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30000,
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
};

export default config;

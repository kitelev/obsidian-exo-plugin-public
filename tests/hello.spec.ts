import { test, expect, _electron as electron } from '@playwright/test';
import { join } from 'path';
import fs from 'fs-extra';

const OBSIDIAN_PATH = '/usr/bin/obsidian';
const PLUGIN_ID = 'hello-plugin';

async function prepareVault(dir: string) {
  const pluginDir = join(dir, '.obsidian', 'plugins', PLUGIN_ID);
  await fs.ensureDir(pluginDir);
  await fs.copy('manifest.json', join(pluginDir, 'manifest.json'));
  await fs.copy('dist/main.js', join(pluginDir, 'main.js'));
  await fs.outputJson(join(dir, '.obsidian', 'plugins', 'plugins.json'), { [PLUGIN_ID]: true });
  await fs.outputJson(join(dir, '.obsidian', 'community-plugins.json'), [PLUGIN_ID]);
}

test('shows hello world notice', async ({}, testInfo) => {
  const vaultDir = join(testInfo.outputDir, 'vault');
  await prepareVault(vaultDir);

  const electronApp = await electron.launch({
    executablePath: OBSIDIAN_PATH,
    args: ['--vault', vaultDir]
  });
  const window = await electronApp.firstWindow();

  await window.waitForSelector('.workspace');

  await window.evaluate(async () => {
    // @ts-ignore
    await window.app.commands.executeCommandById('hello-plugin:show-hello-notice');
  });

  const notice = await window.waitForSelector('.notice-container .notice');
  const text = await notice.textContent();
  expect(text).toContain('Hello World!');

  await electronApp.close();
});

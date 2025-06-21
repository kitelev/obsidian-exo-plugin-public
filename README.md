# Hello Plugin

This repository contains a minimal Obsidian plugin that registers a single command. When executed, the command displays a notice saying **"Hello World!"**.

## Usage

After installing the plugin in your vault, run the command **"Show Hello Notice"** from the command palette to see the greeting.

## Development

Install dependencies and build the plugin:

```bash
npm install
npm run build
```

## End-to-end tests

End-to-end tests are written with [Playwright](https://playwright.dev/). They launch Obsidian, enable the plugin in a temporary vault and assert that the notice appears.

Run the tests locally:

```bash
npx playwright install
npm run e2e
```

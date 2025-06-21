# Repository Guidelines

- Source code lives in `src/` and is written in TypeScript. Build output goes into `dist/`.
- Run `npm install` if `node_modules` is missing, then `npm run build` to compile the plugin.
- Do not use Node's `fs` module or other Node APIs that are unavailable in the Obsidian sandbox. Interact with files through Obsidian's provided APIs only.
- Follow [Obsidian developer policies](https://docs.obsidian.md/Developer+policies) and best practices described in the [Obsidian Collection](https://www.moritzjung.dev/obsidian-collection/).

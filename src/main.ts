import { Plugin, Notice } from 'obsidian';

export default class HelloNoticePlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: 'show-hello-notice',
      name: 'Show Hello Notice',
      callback: () => new Notice('Hello World!'),
    });
  }
}

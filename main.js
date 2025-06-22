"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
class HelloNoticePlugin extends obsidian_1.Plugin {
    async onload() {
        this.addCommand({
            id: 'show-hello-notice',
            name: 'Show Hello Notice',
            callback: () => new obsidian_1.Notice('Hello World!'),
        });
    }
}
exports.default = HelloNoticePlugin;

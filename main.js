"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => VaultOpsNoteLintPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// storage.ts
var DEFAULT_COUNTER = { counter: 0 };
async function readCounter(plugin) {
  const current = await plugin.loadData();
  return current?.counter ?? DEFAULT_COUNTER.counter;
}
async function writeCounter(plugin, next) {
  await plugin.saveData({ counter: next });
}

// analytics.ts
function trackEvent(name, payload) {
  if (process.env.FOF_ANALYTICS_OPT_IN !== "true") {
    return;
  }
  console.log("analytics-event", JSON.stringify({ name, payload }));
}

// main.ts
var DEFAULT_SETTINGS = {
  enableAnalytics: false
};
var VaultOpsNoteLintPlugin = class extends import_obsidian.Plugin {
  settings = DEFAULT_SETTINGS;
  async onload() {
    await this.loadSettings();
    this.addCommand({
      id: "vault-ops-note-lint-run-sample-command",
      name: "Vault Ops - Note Lint: Run sample command",
      callback: () => {
        new import_obsidian.Notice("Vault Ops - Note Lint is active.");
      }
    });
    const currentCount = await readCounter(this);
    await writeCounter(this, currentCount + 1);
    trackEvent("plugin_loaded", { slug: "vault-ops-note-lint" });
    this.addSettingTab(new VaultOpsNoteLintSettingTab(this.app, this));
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = { ...DEFAULT_SETTINGS, ...await this.loadData() };
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var VaultOpsNoteLintSettingTab = class extends import_obsidian.PluginSettingTab {
  plugin;
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Enable analytics events").setDesc("Store simple usage counters locally.").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.enableAnalytics).onChange(async (value) => {
        this.plugin.settings.enableAnalytics = value;
        await this.plugin.saveSettings();
      })
    );
  }
};
//# sourceMappingURL=main.js.map

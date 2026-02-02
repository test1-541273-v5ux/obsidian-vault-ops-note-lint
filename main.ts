import { App, Notice, Plugin, PluginSettingTab, Setting } from "obsidian";
import { readCounter, writeCounter } from "./storage";
import { trackEvent } from "./analytics";

interface VaultOpsNoteLintSettings {
  enableAnalytics: boolean;
}

const DEFAULT_SETTINGS: VaultOpsNoteLintSettings = {
  enableAnalytics: false
};

export default class VaultOpsNoteLintPlugin extends Plugin {
  settings: VaultOpsNoteLintSettings = DEFAULT_SETTINGS;

  async onload(): Promise<void> {
    await this.loadSettings();
    this.addCommand({
      id: "vault-ops-note-lint-run-sample-command",
      name: "Vault Ops - Note Lint: Run sample command",
      callback: () => {
        new Notice("Vault Ops - Note Lint is active.");
      }
    });

    const currentCount = await readCounter(this);
    await writeCounter(this, currentCount + 1);
    trackEvent("plugin_loaded", { slug: "vault-ops-note-lint" });
    this.addSettingTab(new VaultOpsNoteLintSettingTab(this.app, this));
  }

  onunload(): void {
    // no-op
  }

  async loadSettings(): Promise<void> {
    this.settings = { ...DEFAULT_SETTINGS, ...(await this.loadData()) };
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
  }

}

class VaultOpsNoteLintSettingTab extends PluginSettingTab {
  plugin: VaultOpsNoteLintPlugin;

  constructor(app: App, plugin: VaultOpsNoteLintPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName("Enable analytics events")
      .setDesc("Store simple usage counters locally.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.enableAnalytics)
          .onChange(async (value) => {
            this.plugin.settings.enableAnalytics = value;
            await this.plugin.saveSettings();
          })
      );
  }
}

import { Plugin, WorkspaceLeaf } from "obsidian";
import { SwtchView } from "./SwtchView";
// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: "default",
};

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;
	private view: SwtchView;

	private readonly showView = async (): Promise<void> => {
		const { workspace } = this.app;
		const existing = workspace.getLeavesOfType("swtch-view");

		console.log(existing.length);

		if (existing.length === 0) {
			console.log("cmon", workspace.getLeaf(false));
			workspace.getRightLeaf(false)?.setViewState({
				type: "swtch-view",
				active: true,
			});

			workspace.revealLeaf(workspace.getLeavesOfType("swtch-view")[0]);
		}
	};

	async onload() {
		await this.loadSettings();

		this.registerView(
			"swtch-view",
			(leaf) =>
				(this.view = new SwtchView(leaf, "toggle-right", this.app))
		);

		this.app.workspace.onLayoutReady(this.showView);
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

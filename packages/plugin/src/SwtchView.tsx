import { App, ItemView, WorkspaceLeaf } from "obsidian";
import { render } from "solid-js/web";
import MainView from "./components/MainView";

export class SwtchView extends ItemView {
	iconName: string;
	listeners: any[];
	dispose: any;
	app: App;

	constructor(leaf: WorkspaceLeaf, iconName: string, app: App) {
		super(leaf);
		this.iconName = iconName;
		this.app = app;
	}

	getViewType(): string {
		return "swtch-view";
	}

	getDisplayText(): string {
		return "Swtch view";
	}

	getIcon(): string {
		return this.iconName;
	}

	async onOpen() {
		const root = this.containerEl.children[1];
		const wrapper = root.createEl("div");
		let dock: HTMLElement | ShadowRoot;

		dock = wrapper;

		this.dispose = render(() => MainView({ app: this.app }), dock);
	}

	async onClose() {
		this.dispose();
	}
}

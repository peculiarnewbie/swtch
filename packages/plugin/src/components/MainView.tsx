import { App } from "obsidian";
import { css } from "src/css";

export default function MainView(props: { app: App }) {
	return (
		<div style={css({ "--bg": "var(--color_interactive-accent)" })}>
			{" "}
			<div>wha</div>
		</div>
	);
}

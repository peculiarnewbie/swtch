import { createConfig } from "@tokenami/css";

export default createConfig({
	include: ["./src/**/*.{ts,tsx}"],
	grid: "0.25rem",
	responsive: {},
	theme: {
		modes: {
			obsidian: {
				alpha: {},
				anim: {},
				border: {
					standard: "1px solid var(--background-modifier-border)",
				},
				color: {
					"interactive-accent": "var(--interactive-accent)",
					"bg-primary": "--background-primary",
					"icon-color": "var(--icon-color)",
					"text-muted": "var(--text-muted)",
					"text-faint": "var(--text-faint)",
					"bg-primary-alt": "var(--background-primary-alt)",
					"bg-hover": "var(--background-modifier-hover)",
					"interactive-normal": "var(--interactive-normal)",
					"interactive-hover": "var(--interactive-hover)",
				},
				ease: {},
				"font-size": {
					smaller: "var(--font-ui-smaller)",
					small: "var(--font-ui-small)",
					large: "var(--font-ui-large)",
				},
				leading: {},
				"line-style": {},
				radii: { full: "1000px", sm: "4px" },
				size: {},
				shadow: {},
				surface: {},
				tracking: {},
				transition: {},
				weight: {
					bold: "var(--bold-weight)",
				},
				z: {},
			},
		},
	},
	aliases: {
		bg: ["background-color"],
		p: ["padding"],
		py: ["padding-top", "padding-bottom"],
		px: ["padding-left", "padding-right"],
		pl: ["padding-left"],
		pr: ["padding-right"],
		pt: ["padding-top"],
		pb: ["padding-bottom"],
		mx: ["margin-left", "margin-right"],
		h: ["height"],
		w: ["width"],
		"set-y": ["align-items"],
		"set-x": ["justify-content"],
	},
	themeSelector: (mode) =>
		mode === "obsidian" ? `.theme-light, .theme-dark` : ":root",
});

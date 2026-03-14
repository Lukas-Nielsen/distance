import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
	staged: {
		"*": "vp check --fix",
	},
	lint: {
		options: { typeAware: true, typeCheck: true },
		plugins: ["eslint", "import", "oxc", "node", "react", "typescript"],
	},
	fmt: {
		useTabs: true,
		singleQuote: false,
		tabWidth: 4,
		sortImports: {
			groups: [
				"type-import",
				["value-builtin", "value-external"],
				"type-internal",
				"value-internal",
				["type-parent", "type-sibling", "type-index"],
				["value-parent", "value-sibling", "value-index"],
				"unknown",
			],
		},
		sortPackageJson: true,
		printWidth: 150,
	},
	plugins: [react()],
	base: "/",
	server: { open: true },
	build: { emptyOutDir: true, outDir: "./build" },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import oxlintPlugin from "vite-plugin-oxlint";

export default defineConfig({
	plugins: [
		react(),
		oxlintPlugin(),
	],
	base: "/",
	server: { open: true },
	build: { emptyOutDir: true, outDir: "./build" },
});

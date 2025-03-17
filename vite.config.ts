import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import oxlintPlugin from "vite-plugin-oxlint";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		react(),
		oxlintPlugin(),
		VitePWA({
			registerType: "autoUpdate",
			workbox: {
				globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
			},
		}),
	],
	base: "/",
	server: { open: true, port: 3000 },
	build: { emptyOutDir: true, outDir: "./build" },
});

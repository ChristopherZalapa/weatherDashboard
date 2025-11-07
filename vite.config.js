// vite.config.js (ESM)
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, __dirname, ""); // loads .env* files

	return {
		plugins: [react(), tailwindcss()],
		// Use env if present, otherwise pick a sensible default
		base: env.VITE_BASE_PATH || "/weatherDashboard",
		// Safety net: some deps expect process.env to exist
		define: { "process.env": {} },
	};
});

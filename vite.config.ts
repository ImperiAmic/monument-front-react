import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    root: "src",
    globals: true,
    reporters: ["verbose"],
    environment: "jsdom",
    setupFiles: ["./src/setupTest.ts"],
    coverage: {
      provider: "v8",
      include: ["**/*.tsx"],
      exclude: ["main.tsx", "**/*.d.ts", "**/*.ts", "router"],
      reportsDirectory: "../coverage",
    },
  },
});

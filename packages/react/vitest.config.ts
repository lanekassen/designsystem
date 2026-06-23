import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    env: {
      TZ: "UTC", // To avoid flaky tests due to timezone differences in different environments
    },
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          include: ["**/*.{test,spec}.?(c|m)[jt]s"],
          browser: {
            enabled: false,
          },
        },
      },
      {
        extends: true,
        test: {
          name: "e2e",
          // React files are "e2e".
          include: ["**/*.{test,spec}.?(c|m)[jt]sx"],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});

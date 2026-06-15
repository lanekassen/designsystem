import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    env: {
      TZ: "UTC", // To avoid flaky tests due to timezone differences in different environments
    },
  },
});

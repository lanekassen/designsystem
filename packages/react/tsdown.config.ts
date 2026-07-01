import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    form: "src/form/index.ts",
    utils: "src/utils/index.ts",
  },
  dts: {
    build: true,
  },
  unbundle: true,
});

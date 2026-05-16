import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../../../packages/*/!(node_modules)/**/*.stories.@(ts|tsx)"],
  addons: ["storybook-dark-mode"],
  framework: "@storybook/react-vite",
  staticDirs: ["../assets"],
};
export default config;

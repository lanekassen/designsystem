import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../../../packages/*/!(node_modules)/**/*.mdx",
    "../../../packages/*/!(node_modules)/**/*.stories.@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-themes"
  ],
  framework: "@storybook/react-vite",
  staticDirs: ["../assets"],
  features: {
    sidebarOnboardingChecklist: false,
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;

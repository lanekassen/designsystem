import { defineMain } from "@storybook/react-vite/node";
import type { UserConfig } from "vite";

const isFromDependency = (fileName: string) =>
  fileName.includes("node_modules");
const isFromAllowedDependency = (fileName: string) =>
  ["@digdir", "@lanekassen"].some((org) => fileName.includes(org));

export default defineMain({
  stories: [
    "../stories/**/*.mdx",
    "../../../packages/*/!(node_modules|docs)/**/*.mdx",
    "../../../packages/*/!(node_modules)/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    "@storybook/addon-vitest",
  ],
  framework: "@storybook/react-vite",
  staticDirs: ["../assets"],
  features: {
    sidebarOnboardingChecklist: false,
    interactions: false,
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      include: ["../../packages/react/src/**/*.tsx"],
      tsconfigPath: "../../packages/react/tsconfig.json",
      propFilter: (prop) => {
        // Remove popovertarget prop which @digdir/designsystemet-react adds to all elements
        if (prop.name === "popovertarget") {
          return false;
        }

        // Filter out third-party props from node_modules except @digdir packages.
        // Unlike the default logic, this checks all declaration locations and allows
        // props if they have been defined locally or in @digdir/* packages, even if
        // they are also defined in a non-allow location (other packages)
        const filesToCheck = [
          prop.parent?.fileName ?? [],
          prop.declarations?.map((x) => x.fileName) ?? [],
        ].flat();
        const isPropFromAllowedLocation = filesToCheck.some(
          (fileName) =>
            isFromAllowedDependency(fileName) || !isFromDependency(fileName),
        );
        return isPropFromAllowedLocation;
      },
      // Required for unions like Size, Color etc from @digdir to generate options in Storybook controls
      shouldExtractLiteralValuesFromEnum: true,
      // Removes "undefined" as an option in Storybook controls for optional properties
      shouldRemoveUndefinedFromOptional: true,
      // Fix naming of compound components in code snippets
      setDisplayName: false,
    },
  },
  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      build: {
        rolldownOptions: {
          onLog(level, log, defaultHandler) {
            // Silence warnings for "use client" directives which was introduced in rolldown v1.2.9
            // Adapted from https://github.com/vitejs/vite-plugin-react/blob/c90e60ace9cadafa9d056836cc2b9ffe68e1f21d/packages/common/warning.ts#L9
            if (
              log.code === "MODULE_LEVEL_DIRECTIVE" &&
              log.message.includes("use client")
            ) {
              return;
            }
            defaultHandler(level, log);
          },
        },
      },
    } satisfies UserConfig);
  },
});

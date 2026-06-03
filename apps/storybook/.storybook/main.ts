import { defineMain } from "@storybook/react-vite/node";

const isFromDependency = (fileName: string) =>
  fileName.includes("node_modules");
const isFromAllowedDependency = (fileName: string) =>
  ["@digdir", "@lanekassen"].some((org) => fileName.includes(org));

export default defineMain({
  stories: [
    "../stories/**/*.mdx",
    "../../../packages/*/!(node_modules)/**/*.mdx",
    "../../../packages/*/!(node_modules)/**/*.stories.@(ts|tsx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-themes"],
  framework: "@storybook/react-vite",
  staticDirs: ["../assets"],
  features: {
    sidebarOnboardingChecklist: false,
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
});

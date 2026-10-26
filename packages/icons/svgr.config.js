import { basename } from "node:path";

// `indexTemplate` is a CLI-only option and is not part of `@svgr/core`'s Config.
/** @type {import("@svgr/core").Config & { indexTemplate?: (files: { path: string; originalPath: string }[]) => string }} */
export default {
  typescript: true,
  jsxRuntime: "automatic",
  icon: true,
  svgProps: {
    role: "img",
  },
  // SVG files are already optimized. Only remove the root id used by `<use>`,
  // so components don't render duplicate ids.
  svgo: true,
  svgoConfig: {
    plugins: [{ name: "removeAttrs", params: { attrs: "svg:id" } }],
  },
  prettier: false,
  indexTemplate(files) {
    return files
      .map(({ path }) => {
        const name = basename(path, ".tsx");
        return `export { default as ${name}Icon } from "./${name}";`;
      })
      .join("\n");
  },
};

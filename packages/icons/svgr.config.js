import { basename } from "node:path";

export default {
  typescript: true,
  jsxRuntime: "automatic",
  icon: true,
  svgProps: {
    role: "img",
  },
  svgo: false,
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

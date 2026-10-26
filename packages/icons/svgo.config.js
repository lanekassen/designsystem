/** @type {import("svgo").Config} */
export default {
  multipass: true,
  js2svg: {
    pretty: true,
    indent: 2,
  },
  plugins: [
    "preset-default",
    "convertStyleToAttrs",
    {
      name: "convertColors",
      params: {
        currentColor: true,
      },
    },
    {
      name: "removeAttrs",
      params: {
        attrs: ["data-.*", "class"],
      },
    },
  ],
};

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
    "removeDimensions",
    {
      // `1em` makes icons follow font size. `id` enables `<use href="Icon.svg#icon">`.
      name: "addAttributesToSVGElement",
      params: {
        attributes: [{ width: "1em", height: "1em", id: "icon" }],
      },
    },
  ],
};
